
data "archive_file" "lambda_hello_world" {
  type = "zip"

  source_dir  = "${path.module}/../lambda/dist/"
  output_path = "${path.module}/../lambda/dist/function.zip"
}

resource "aws_lambda_layer_version" "dependency_layer" {
  layer_name = "dependency_layer"

  s3_bucket         = aws_s3_bucket.lambda_bucket.id
  s3_key            = aws_s3_bucket_object.lambda_dependency.id
  s3_object_version = aws_s3_bucket_object.lambda_dependency.version_id

  compatible_runtimes = ["nodejs12.x"]
  source_code_hash    = base64sha256(filebase64("${path.module}/../dist/layers/layers.zip"))
}

resource "aws_lambda_function" "hello_world" {
  depends_on    = [aws_lambda_layer_version.dependency_layer]
  function_name = "HelloWorld"

  s3_bucket = aws_s3_bucket.lambda_bucket.id
  s3_key    = aws_s3_bucket_object.lambda_hello_world.key

  runtime = "nodejs12.x"
  handler = "index.helloHandler"

  layers           = [aws_lambda_layer_version.dependency_layer.arn]
  source_code_hash = data.archive_file.lambda_hello_world.output_base64sha256

  role = aws_iam_role.lambda_exec.arn
}


resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.hello_world.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
}
