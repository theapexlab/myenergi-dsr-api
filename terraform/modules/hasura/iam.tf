# -----------------------------------------------------------------------------
# Service role allowing AWS to manage resources required for ECS
# -----------------------------------------------------------------------------

resource "aws_iam_service_linked_role" "ecs_service" {
  aws_service_name = "ecs.amazonaws.com"
  count            = var.create_iam_service_linked_role ? 1 : 0
}

# -----------------------------------------------------------------------------
# Add IAM policy to allow the ALB to log to it
# -----------------------------------------------------------------------------

data "aws_elb_service_account" "main" {
}

data "aws_iam_policy_document" "hasura" {
  statement {
    actions   = ["s3:PutObject"]
    resources = ["${aws_s3_bucket.hasura.arn}/alb/*"]

    principals {
      type        = "AWS"
      identifiers = [data.aws_elb_service_account.main.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "hasura" {
  bucket = aws_s3_bucket.hasura.id
  policy = data.aws_iam_policy_document.hasura.json
}

# -----------------------------------------------------------------------------
# Create IAM for logging
# -----------------------------------------------------------------------------

data "aws_iam_policy_document" "hasura_log_publishing" {
  statement {
    actions = [
      "logs:CreateLogStream",
      "logs:PutLogEvents",
      "logs:PutLogEventsBatch",
    ]

    resources = ["arn:aws:logs:${var.region}:*:log-group:/ecs/hasura:*"]
  }
}

resource "aws_iam_policy" "hasura_log_publishing" {
  name        = "hasura-log-pub"
  path        = "/"
  description = "Allow publishing to cloudwach"

  policy = data.aws_iam_policy_document.hasura_log_publishing.json
}

data "aws_iam_policy_document" "hasura_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "hasura_role" {
  name               = "hasura-role"
  path               = "/system/"
  assume_role_policy = data.aws_iam_policy_document.hasura_assume_role_policy.json
}

resource "aws_iam_role_policy_attachment" "hasura_role_log_publishing" {
  role       = aws_iam_role.hasura_role.name
  policy_arn = aws_iam_policy.hasura_log_publishing.arn
}
