resource "aws_cognito_user_pool_domain" "main" {
  domain       = "dsr-api-${local.env}"
  user_pool_id = aws_cognito_user_pool.pool.id
}
resource "aws_cognito_user_pool" "pool" {
  name = "dsr-api-${local.env}"
}
resource "aws_cognito_resource_server" "resource" {
  identifier = "https://dsr-api.myenergi.net"
  name       = "Demand Side Response API"

  user_pool_id = aws_cognito_user_pool.pool.id

  scope {
    scope_name = "api.readwrite"
  }
}
