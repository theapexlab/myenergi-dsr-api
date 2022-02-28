# -----------------------------------------------------------------------------
# Create Route 53 record to point to the ALB
# -----------------------------------------------------------------------------

resource "aws_route53_record" "hasura" {
  zone_id = data.aws_route53_zone.hasura.zone_id
  name    = "${var.hasura_subdomain}.${var.domain}"
  type    = "A"

  alias {
    name                   = aws_alb.hasura.dns_name
    zone_id                = aws_alb.hasura.zone_id
    evaluate_target_health = true
  }

}

data "aws_route53_zone" "hasura" {
  name = "${var.domain}."
}

resource "aws_route53_record" "hasura_validation" {
  depends_on = [aws_acm_certificate.hasura]
  name       = element(tolist(aws_acm_certificate.hasura.domain_validation_options), 0)["resource_record_name"]
  type       = element(tolist(aws_acm_certificate.hasura.domain_validation_options), 0)["resource_record_type"]
  zone_id    = data.aws_route53_zone.hasura.zone_id
  records    = [element(tolist(aws_acm_certificate.hasura.domain_validation_options), 0)["resource_record_value"]]
  ttl        = 300
}
