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
  required_version = "~> 1.0"
}






