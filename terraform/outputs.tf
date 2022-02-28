# Output value definitions

output "lambda_bucket_name" {
  description = "Name of the S3 bucket used to store function code."

  value = aws_s3_bucket.lambda_bucket.id
}

output "function_name" {
  description = "Name of the Lambda function."

  value = aws_lambda_function.dsr_api.function_name
}


output "base_url" {
  description = "Base URL for API Gateway stage."

  value = aws_apigatewayv2_stage.lambda.invoke_url
}

output "hasura_vpc" {
  description = "VPC created to hold Hasura resources"
  value       = module.hasura.vpc
}

output "hasura_private_subnets" {
  description = "Private subnets created for RDS within the VPC, each in a different AZ"
  value       = module.hasura.private_subnets
}

output "hasura_public_subnets" {
  description = "Public subnets created for Hasura within the VPC, each in a different AZ"
  value       = module.hasura.public_subnets
}

output "hasura_ecs_security_group" {
  description = "Security group controlling access to the ECS tasks"
  value       = module.hasura.ecs_security_group
}
