# -----------------------------------------------------------------------------
# Reference existing  ECS cluster
# -----------------------------------------------------------------------------

data "aws_ecs_cluster" "hasura" {
  cluster_name = var.ecs_cluster_name
}

# -----------------------------------------------------------------------------
# Create a task definition
# -----------------------------------------------------------------------------

locals {
  ecs_environment = [
    {
      name  = "HASURA_GRAPHQL_ADMIN_SECRET",
      value = "${var.hasura_admin_secret}"
    },
    {
      name  = "HASURA_GRAPHQL_DATABASE_URL",
      value = "postgres://${var.rds_username}:${var.rds_password}@${aws_db_instance.hasura.endpoint}/${var.rds_db_name}"
    },
    {
      name  = "HASURA_GRAPHQL_ENABLE_CONSOLE",
      value = "${var.hasura_console_enabled}"
    },
    # {
    #   name  = "HASURA_GRAPHQL_CORS_DOMAIN",
    #   value = "https://${var.app_subdomain}.${var.domain}:443, https://${var.app_subdomain}.${var.domain}"
    # },
    {
      name  = "HASURA_GRAPHQL_PG_CONNECTIONS",
      value = "100"
    },
    {
      name  = "HASURA_GRAPHQL_JWT_SECRET",
      value = "{\"type\":\"${var.hasura_jwt_secret_algo}\", \"key\": \"${var.hasura_jwt_secret_key}\"}"
    }
  ]

  ecs_container_definitions = [
    {
      image       = "hasura/graphql-engine:${var.hasura_version_tag}"
      name        = "hasura",
      networkMode = "awsvpc",

      portMappings = [
        {
          containerPort = 8080,
          hostPort      = 8080
        }
      ]

      logConfiguration = {
        logDriver = "awslogs",
        options = {
          awslogs-group         = "${aws_cloudwatch_log_group.hasura.name}",
          awslogs-region        = "${var.region}",
          awslogs-stream-prefix = "ecs"
        }
      }

      environment = flatten([local.ecs_environment, var.environment])
    }
  ]
}

resource "aws_ecs_task_definition" "hasura" {
  family                   = "hasura"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.hasura_role.arn

  container_definitions = jsonencode(local.ecs_container_definitions)
}

# -----------------------------------------------------------------------------
# Create the ECS service
# -----------------------------------------------------------------------------

resource "aws_ecs_service" "hasura" {
  depends_on = [
    aws_ecs_task_definition.hasura,
    aws_cloudwatch_log_group.hasura,
    aws_alb_listener.hasura
  ]
  name            = "hasura-service"
  cluster         = data.aws_ecs_cluster.hasura.id
  task_definition = aws_ecs_task_definition.hasura.arn
  desired_count   = var.multi_az == true ? "2" : "1"
  launch_type     = "FARGATE"

  network_configuration {
    assign_public_ip = true
    security_groups  = [aws_security_group.hasura_ecs.id]
    subnets          = aws_subnet.hasura_public.*.id
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.hasura.id
    container_name   = "hasura"
    container_port   = "8080"
  }
}
