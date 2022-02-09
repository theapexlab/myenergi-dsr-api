import { APIGatewayProxyEvent } from "aws-lambda";
import { helloHandler } from ".";

describe("handler", () => {
  test("return Hello Myenergi!", async () => {
    const testEvent: Partial<APIGatewayProxyEvent> = {
      queryStringParameters: {
        message: "Myenergi",
      },
    };
    const result = await helloHandler(testEvent as any);
    const bodyJSON = JSON.parse(result.body);
    expect(bodyJSON.message).toEqual("Hello Myenergi!");
  });
});
