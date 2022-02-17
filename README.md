# Myenergi - Demand Side Response API

## Get started - Local

1. `yarn install`
2. `yarn start`

## Get started - AWS deployment

0. Prerequisites

   - Terraform CLI [installed](https://learn.hashicorp.com/tutorials/terraform/install-cli)
   - Environtment variables added:
     - `$ export AWS_ACCESS_KEY_ID="anaccesskey"`
     - `$ export AWS_SECRET_ACCESS_KEY="asecretkey"`

1. Run `yarn install` to install dependencies
2. Run `yarn build` to run TSC to compile TS code to plain JS
3. Run `yarn tf:init` to get aws provider plugin downloaded
4. Run `yarn tf:plan` to see changes that will be made
5. Run `yarn tf:apply` to actually make those changes to your provider
6. Visit AWS and see all your services provisioned via terraform
7. (optional) Run `yarn tf:destroy` to destroy all the services that were built

## Lint & Test

1. Run `yarn lint` or `yarn lint --fix`
2. Run `yarn test` or `yarn test:watch`

## Development environment

- Node: v.14.19
- Yarn: v.1.22.17

## Tech 🧰

- Terraform
- Typescript
- ESLint
- Prettier
- Husky
- Apollo
- Express
- Sofa
- TypeGraphQL
- Circleci

## What gets provisioned? 🔍

- AWS
  - API Gateway
  - Lambda
  - S3
  - CloudWatch

## Deployment 🚀

- Deployment is done via circleci, to see how the workflow is contructed check-out the [config](./.circleci/config.yml) file
- Also we made a [drawio](./deployment.drawio) diagram to show the proccess overview
