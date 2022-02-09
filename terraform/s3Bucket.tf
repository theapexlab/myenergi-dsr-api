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
