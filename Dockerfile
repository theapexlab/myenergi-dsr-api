FROM node:14.19-alpine

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./
COPY ./src ./src/

RUN yarn install

EXPOSE 3000

CMD yarn start
