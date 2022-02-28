# -----------------------------------------------------------------------------
# Create the ALB log bucket
# -----------------------------------------------------------------------------

resource "aws_s3_bucket" "hasura" {
  bucket        = "hasura-${var.region}-${var.hasura_subdomain}-${var.domain}"
  acl           = "private"
  force_destroy = "true"
}
