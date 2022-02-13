resource "aws_s3_bucket" "lambda_bucket" {
  bucket = var.lambda_bucket

  acl           = "private"
  force_destroy = true
}

resource "aws_s3_bucket_object" "lambda_hello_world" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "hello-world.zip"
  source = data.archive_file.lambda_hello_world.output_path

  etag = filemd5(data.archive_file.lambda_hello_world.output_path)
}
resource "aws_s3_bucket_object" "lambda_hello_rest" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "hello-rest.zip"
  source = data.archive_file.lambda_hello_rest.output_path

  etag = filemd5(data.archive_file.lambda_hello_rest.output_path)
}
resource "aws_s3_bucket_object" "lambda_dependency" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "lambda_dependency.zip"
  source = "${path.module}/../dist/layers/layers.zip"

  # todo: use ref to actual lamda layer instead of lambda
  etag = filemd5(data.archive_file.lambda_hello_world.output_path)
}
