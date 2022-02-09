"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloHandler = void 0;
const helloHandler = async (event) => {
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
exports.helloHandler = helloHandler;
