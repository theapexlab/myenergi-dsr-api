import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const helloHandler = async (event: APIGatewayProxyEvent) => {
  console.log("Event: ", event);
  let responseMessage = "Hello World!";
  const message = event.queryStringParameters
    ? event.queryStringParameters["message"]
    : "";

  if (message) {
    responseMessage = "Hello " + message + "!";
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
