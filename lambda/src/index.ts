// import { APIGatewayProxyEvent } from 'aws-lambda';

// export const helloHandler = async (event: APIGatewayProxyEvent) => {
//   console.log('Event: ', event);
//   let responseMessage = 'Hello World!';
//   const message = event.queryStringParameters ? event.queryStringParameters['message'] : '';

//   if (message) {
//     responseMessage = 'Hello ' + message + '!';
//   }

//   return {
//     statusCode: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       message: responseMessage,
//     }),
//   };
// };

// graphql.js

import { ApolloServer, gql } from 'apollo-server-lambda';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello Myenergi!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const helloHandler = server.createHandler();
