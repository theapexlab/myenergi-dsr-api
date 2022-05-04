resource "random_uuid" "randomid" {}

resource "aws_s3_bucket" "lambda_bucket" {
  bucket = "${var.lambda_bucket}-${random_uuid.randomid.result}"

  acl           = "private"
  force_destroy = true
}

resource "aws_s3_bucket_object" "lambda_dsr_api" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "dsr_api.zip"
  source = data.archive_file.dsr_aggregator_api.output_path

  etag = filemd5(data.archive_file.dsr_aggregator_api.output_path)
}

resource "aws_s3_bucket_object" "lambda_dependency" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "dependency_layer.zip"
  source = data.archive_file.dependency_layer.output_path

  etag = filemd5(data.archive_file.dependency_layer.output_path)
}
