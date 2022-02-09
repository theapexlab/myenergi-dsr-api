import { APIGatewayProxyEvent } from "aws-lambda";
import { helloHandler } from ".";

describe("handler", () => {
  test("return Hello Myenergi!", async () => {
    const testEvent: APIGatewayProxyEvent = {
      queryStringParameters: {
        message: "Myenergi",
      },
    } as any;
    const result = await helloHandler(testEvent);
    const bodyJSON = JSON.parse(result.body);
    expect(bodyJSON.message).toEqual("Hello Myenergi!");
  });
});
