data "archive_file" "lambda_dsr_api" {
  type = "zip"

  source_dir  = "${path.module}/../dist/"
  output_path = "${path.module}/../zips/dsr_api.zip"
}

data "archive_file" "dependency_layer" {
  type = "zip"

  source_dir  = "${path.module}/../dist_layer/"
  output_path = "${path.module}/../zips/layer.zip"
}

resource "aws_lambda_layer_version" "dependency_layer" {
  layer_name = "dependency_layer"

  s3_bucket         = aws_s3_bucket.lambda_bucket.id
  s3_key            = aws_s3_bucket_object.lambda_dependency.id
  s3_object_version = aws_s3_bucket_object.lambda_dependency.version_id

  compatible_runtimes = ["nodejs14.x"]
  source_code_hash    = data.archive_file.dependency_layer.output_base64sha256
}

resource "aws_lambda_function" "dsr_api" {
  depends_on    = [aws_lambda_layer_version.dependency_layer]
  function_name = "DsrApi"

  s3_bucket = aws_s3_bucket.lambda_bucket.id
  s3_key    = aws_s3_bucket_object.lambda_dsr_api.key

  runtime = "nodejs14.x"
  handler = "index.handler"

  layers           = [aws_lambda_layer_version.dependency_layer.arn]
  source_code_hash = data.archive_file.lambda_dsr_api.output_base64sha256

  role = aws_iam_role.lambda_exec.arn

  timeout = 10

  environment {
    variables = {
      DAL_ENDPOINT     = "https://${module.hasura.hasura_route53_record_name}/v1/graphql"
      DAL_ADMIN_SECRET = var.hasura_admin_secret
    }
  }
}


resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.dsr_api.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
}
