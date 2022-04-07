resource "aws_cognito_user_pool" "pool" {
  name = "dsr-api_${local.env}"
}