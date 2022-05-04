resource "aws_cloudwatch_log_group" "aggregator_log_group" {
  name              = "/aws/lambda/${aws_lambda_function.dsr_aggregator_api.function_name}"
  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "admin_log_group" {
  name              = "/aws/lambda/${aws_lambda_function.dsr_admin_api.function_name}"
  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "api_gw_log_group" {
  name              = "/aws/api_gw/${aws_apigatewayv2_api.lambda.name}"
  retention_in_days = 30
}
