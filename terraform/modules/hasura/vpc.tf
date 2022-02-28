# -----------------------------------------------------------------------------
# Create VPC
# -----------------------------------------------------------------------------

# Fetch AZs in the current region
data "aws_availability_zones" "available" {
}

data "aws_vpc" "hasura" {
  id = var.vpc
}











