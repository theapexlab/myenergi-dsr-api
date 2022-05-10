resource "aws_apigatewayv2_api" "lambda" {
  name          = "dsr_api_gw"
  protocol_type = "HTTP"
  cors_configuration  {
    allow_origins = ["*"]
  }
}

resource "aws_apigatewayv2_stage" "lambda" {
  api_id = aws_apigatewayv2_api.lambda.id

  name        = "$default"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_gw_log_group.arn

    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
    })
  }
}

resource "aws_apigatewayv2_route" "aggregator" {
  api_id    = aws_apigatewayv2_api.lambda.id
  route_key = "ANY /aggregator/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.aggregator.id}"
}

resource "aws_apigatewayv2_route" "admin" {
  api_id    = aws_apigatewayv2_api.lambda.id
  route_key = "ANY /admin/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.admin.id}"
}

resource "aws_apigatewayv2_integration" "aggregator" {
  api_id = aws_apigatewayv2_api.lambda.id

  integration_uri    = aws_lambda_function.dsr_aggregator_api.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_integration" "admin" {
  api_id = aws_apigatewayv2_api.lambda.id

  integration_uri    = aws_lambda_function.dsr_admin_api.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_lambda_permission" "aggregator_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.dsr_aggregator_api.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
}

resource "aws_lambda_permission" "admin_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.dsr_admin_api.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
}
