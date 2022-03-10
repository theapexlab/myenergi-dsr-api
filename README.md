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
- Hasura

## What gets provisioned? 🔍

- AWS
  - API Gateway
  - Lambda
  - S3
  - CloudWatch

## Deployment 🚀

- Deployment is done via circleci, to see how the workflow is contructed check-out the [config](./.circleci/config.yml) file
- Also we made a [drawio](./deployment.drawio) diagram to show the proccess overview

## Hasura

- [read docs here](https://hasura.io/docs/latest/graphql/core/index.html)

### Basics

- Manages database connections (`histrory`, `main`, `default`)
- Hasura provides GraphQL API based on database schemas
- `default` database and its migrations are exclusively by hasura
  - `history`, `main` databases are used only for CRUD operations
- Interaction with hasura are excecuted via `hasura-cli`
  - hasura related metadata / migration and config file are located `./hasura` folder
  - `hasura-cli` is added to package json as dev dependency

### Console

- Hasura console can be used to access Graphql API or to modify database rows & schema
- To start console run: `yarn hasura:console`

### Migrations

#### Add changes to database

1.  open hasura console with`yarn hasura:console`
2.  add changes on the console GUI, this will generate new migration / metadata files in this repo
3.  to apply new migration run `yarn hasura:apply --version <migration-version>`

#### Squash migation

1.  To squash migration files run `yarn hasura:squash --name <feature-name> --from <start-migration-version>`
2.  To mark the squashed migration as applied on this server `yarn hasura:mark:squash --version <squash-migration-version>`
