resource "aws_cognito_user_pool_domain" "main" {
  domain       = "dsr-api-${local.env}"
  user_pool_id = aws_cognito_user_pool.pool.id
}
resource "aws_cognito_user_pool" "pool" {
  name = "dsr-api-${local.env}"
}
resource "aws_cognito_resource_server" "resource" {
  identifier = var.cognito_resource_server_identifier
  name       = "Demand Side Response API"

  user_pool_id = aws_cognito_user_pool.pool.id

  scope {
    scope_name        = var.cognito_oauth_scope
    scope_description = "Scope for read/write access to the API"
  }
}
