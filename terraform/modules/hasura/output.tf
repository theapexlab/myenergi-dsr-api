output "vpc" {
  description = "VPC created to hold Hasura resources"
  value       = data.aws_vpc.hasura
}

output "private_subnets" {
  description = "Private subnets created for RDS within the VPC, each in a different AZ"
  value       = aws_subnet.hasura_private
}

output "public_subnets" {
  description = "Public subnets created for Hasura within the VPC, each in a different AZ"
  value       = aws_subnet.hasura_public
}

output "ecs_security_group" {
  description = "Security group controlling access to the ECS tasks"
  value       = aws_security_group.hasura_ecs
}
output "hasura_route53_record_name" {
  description = "Route53 record on which hasura can be accessed"
  value       = aws_route53_record.hasura.name
}
