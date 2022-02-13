# Input variable definitions
variable "aws_region" {
  description = "AWS region for all resources."
  type        = string
  default     = "eu-west-1"
}

variable "lambda_bucket" {
  description = "AWS S3 bucket name, in which lambda is stored."
  type        = string
  default     = "apexlab-lambda-bucket-3"

}
