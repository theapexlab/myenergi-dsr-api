terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.48.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "~> 3.1.0"
    }

    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.2.0"
    }
  }
  cloud {
    organization = "myenergi"

    workspaces {
      name = "dsr-api-dev"
    }
  }
  required_version = "~> 1.1.6"
}

module "hasura" {
  source                         = "./modules/hasura"
  region                         = var.aws_region
  domain                         = var.domain
  hasura_subdomain               = var.hasura_subdomain
  app_subdomain                  = var.app_subdomain
  hasura_version_tag             = var.hasura_version_tag
  hasura_admin_secret            = var.hasura_admin_secret
  hasura_jwt_secret_algo         = var.hasura_jwt_secret_algo
  hasura_jwt_secret_key          = var.hasura_jwt_secret_key
  hasura_console_enabled         = var.hasura_console_enabled
  rds_db_name                    = var.rds_db_name
  rds_instance                   = var.rds_instance
  rds_username                   = var.rds_username
  rds_password                   = var.rds_password
  rds_storage_encrypted          = var.rds_storage_encrypted
  multi_az                       = var.multi_az
  az_count                       = var.az_count
  vpc_enable_dns_hostnames       = var.vpc_enable_dns_hostnames
  additional_db_security_groups  = var.additional_db_security_groups
  create_iam_service_linked_role = var.create_iam_service_linked_role
  ecs_cluster_name               = var.ecs_cluster_name
  vpc                            = var.vpc
  internet_gateway_id            = var.internet_gateway_id
  nat_gateway_id                 = var.nat_gateway_id
  sg_main_db                     = var.sg_main_db
  common_tags                    = local.common_tags
}




