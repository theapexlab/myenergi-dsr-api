# -----------------------------------------------------------------------------
# Create security groups
# -----------------------------------------------------------------------------

# Internet to ALB
resource "aws_security_group" "hasura_alb" {
  name        = "hasura-alb"
  description = "Allow access on port 443 only to ALB"
  vpc_id      = data.aws_vpc.hasura.id

  ingress {
    protocol    = "tcp"
    from_port   = 443
    to_port     = 443
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ALB TO ECS
resource "aws_security_group" "hasura_ecs" {
  name        = "hasura-tasks"
  description = "allow inbound access from the ALB only"
  vpc_id      = data.aws_vpc.hasura.id

  ingress {
    protocol        = "tcp"
    from_port       = "8080"
    to_port         = "8080"
    security_groups = [aws_security_group.hasura_alb.id]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ECS to RDS
resource "aws_security_group" "hasura_rds" {
  name        = "hasura-rds"
  description = "allow inbound access from the hasura tasks only"
  vpc_id      = data.aws_vpc.hasura.id

  ingress {
    protocol        = "tcp"
    from_port       = 5432
    to_port         = 5432
    security_groups = concat([aws_security_group.hasura_ecs.id], var.additional_db_security_groups)
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Reference to main_db's security group
data "aws_security_group" "main_db_group" {
  id = var.sg_main_db
}

# ECS to MAIN_DB RDS
resource "aws_security_group_rule" "main_db_ingress" {
  description              = "hasura ec2 to main db"
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 5432
  to_port                  = 5432
  security_group_id        = data.aws_security_group.main_db_group.id
  source_security_group_id = aws_security_group.hasura_ecs.id
}
