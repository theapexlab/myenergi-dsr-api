# -----------------------------------------------------------------------------
# Create the certificate
# -----------------------------------------------------------------------------

resource "aws_acm_certificate" "hasura" {
  domain_name       = "${var.hasura_subdomain}.${var.domain}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# -----------------------------------------------------------------------------
# Validate the certificate
# -----------------------------------------------------------------------------

resource "aws_acm_certificate_validation" "hasura" {
  certificate_arn         = aws_acm_certificate.hasura.arn
  validation_record_fqdns = aws_route53_record.hasura_validation.*.fqdn
}
