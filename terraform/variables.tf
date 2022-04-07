# Input variable definitions
variable "aws_region" {
  description = "AWS region for all resources."
  type        = string
  default     = "eu-west-1"
}

variable "lambda_bucket" {
  description = "AWS S3 bucket name, in which lambda is stored."
  type        = string
  default     = "apexlab-lambda-bucket-dev"
}


# For HASURA
variable "db_port" {
  description = "Port number of main db"
  type        = number
  default     = 5432
}
variable "db_host_main" {
  description = "Host of main db"
  type        = string
  default     = "main-db.ctkpomhczeo9.eu-west-1.rds.amazonaws.com"
}
variable "db_name_main" {
  description = "Local hasura alias for main db"
  type        = string
  default     = "myenergi"
}
variable "db_user_main" {
  description = "Username for main db"
  type        = string
  default     = "myenergi"
}
variable "db_password_main" {
  description = "Password for main db"
  type        = string
  default     = "myenergi"
}

variable "domain" {
  description = "Domain name. Service will be deployed using the hasura_subdomain"
  type        = string
  default     = "myenergi-dev.zoosh.ie"
}

variable "hasura_subdomain" {
  description = "The Subdomain for your hasura graphql service."
  type        = string
  default     = "dsr-hasura-api"
}

variable "app_subdomain" {
  description = "The Subdomain for your application that will make CORS requests to the hasura_subdomain"
  type        = string
  default     = "app"
}
variable "hasura_version_tag" {
  description = "The hasura graphql engine version tag"
  type        = string
  default     = "v2.2.0"
}

variable "hasura_admin_secret" {
  description = "The admin secret to secure hasura; for admin access"
  type        = string
  default     = "admin"
}

variable "hasura_jwt_secret_key" {
  description = "The secret shared key for JWT verification"
  type        = string
  default     = "oyDntEt6Lrk8yhTA7hIR8rR9DyuvVI1GE63_d6y8JLY"
}

variable "hasura_jwt_secret_algo" {
  description = "The algorithm for JWT verification (HS256 or RS256)"
  type        = string
  default     = "HS256"
}

variable "hasura_console_enabled" {
  description = "Should the Hasura Console web interface be enabled?"
  type        = string
  default     = "false"
}

variable "rds_username" {
  description = "The username for RDS"
  type        = string
  default     = "myenergi"
}

variable "rds_password" {
  description = "The password for RDS"
  type        = string
  default     = "myenergi"
}

variable "rds_db_name" {
  description = "The DB name in the RDS instance"
  type        = string
  default     = "myenergi"
}

variable "rds_instance" {
  description = "The size of RDS instance, eg db.t2.micro"
  type        = string
  default     = "db.t2.micro"
}

variable "rds_storage_encrypted" {
  description = "Whether the data on the PostgreSQL instance should be encrpyted."
  default     = false
}

variable "az_count" {
  description = "How many AZ's to create in the VPC"
  default     = 2
}

variable "multi_az" {
  description = "Whether to deploy RDS and ECS in multi AZ mode or not"
  default     = true
}

variable "vpc_enable_dns_hostnames" {
  description = "A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false."
  default     = false
}

variable "additional_db_security_groups" {
  description = "List of Security Group IDs to have access to the RDS instance"
  default     = []
}

variable "create_iam_service_linked_role" {
  description = "Whether to create IAM service linked role for AWS ElasticSearch service. Can be only one per AWS account."
  default     = false
}

variable "ecs_cluster_name" {
  description = "The name to assign to the ECS cluster"
  default     = "myenergi-cluster"
}
variable "vpc" {
  description = "VPC ID of myenergi infrastructure"
  default     = "vpc-03a4d16d1a9ed7256"
}
variable "internet_gateway_id" {
  description = "IGW ID of myenergi infrastructure"
  default     = "igw-027f17c4991521c43"
}

variable "nat_gateway_id" {
  description = "Nat Gateway ID of myenergi infrastructure"
  default     = "nat-0dd8ece927bb31fa5"
}
variable "sg_main_db" {
  description = "Security group ID of myenergi infrastructure's main database."
  default     = "sg-077105b94c8fb1a57"
}

variable "super_admin_username" {
  description = "Superadmin username for HTTP Basic Authentication"
  default = "admin"
}
variable "super_admin_password" {
  description = "Superadmin password for HTTP Basic Authentication"
  default = "6yn3sEAzj4qxpF7u"
}


