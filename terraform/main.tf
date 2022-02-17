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
  backend "s3" {
    bucket = "circle-ci-backend-20220216073156857200000001"
    key    = "terraform/dsr-api/terraform.tfstate"
    region = "eu-west-1"
  }

  required_version = "~> 1.0"
}






