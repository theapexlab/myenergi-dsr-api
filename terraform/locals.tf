locals {
  # Environment in use according to the Terraform Workspace
  # Values: default, dev, test, prod
  #   env = terraform.workspace
  env = "dev"

  project_name = "dsr-api"

  # NODE_ENV for deployment
  node_env = {
    dev  = "dev"
    test = "awstest"
    prod = "prod"
  }
  # Common tags for all the resources
  common_tags = {
    Creator     = "apexlab"
    Project     = local.project_name
    Environment = local.env
  }
}
