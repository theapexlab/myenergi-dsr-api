# -----------------------------------------------------------------------------
# Create the ALB
# -----------------------------------------------------------------------------

resource "aws_alb" "hasura" {
  name            = "hasura-alb"
  subnets         = aws_subnet.hasura_public.*.id
  security_groups = [aws_security_group.hasura_alb.id]

  access_logs {
    bucket  = aws_s3_bucket.hasura.id
    prefix  = "alb"
    enabled = true
  }
}

# -----------------------------------------------------------------------------
# Create the ALB target group for ECS
# -----------------------------------------------------------------------------

resource "aws_alb_target_group" "hasura" {
  name        = "hasura-alb"
  port        = 8080
  protocol    = "HTTP"
  vpc_id      = data.aws_vpc.hasura.id
  target_type = "ip"

  health_check {
    path    = "/healthz"
    matcher = "200"
  }
}

# -----------------------------------------------------------------------------
# Create the ALB listener
# -----------------------------------------------------------------------------

resource "aws_alb_listener" "hasura" {
  load_balancer_arn = aws_alb.hasura.id
  port              = "443"
  protocol          = "HTTPS"
  certificate_arn   = aws_acm_certificate.hasura.arn

  default_action {
    target_group_arn = aws_alb_target_group.hasura.id
    type             = "forward"
  }
}
