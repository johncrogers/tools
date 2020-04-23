/*
    TODO:
        - Fill names:
            1: actionGenerator
            2: ActionTag
            3: Endpoint
            4: Method
 */

export function $1(requestBody: $2PayloadType) {
  return {
    body: requestBody,
    headers: { "Content-Type": "application/json" },
    requestOptions: { method: "$4" },
    requestUrl: "/$3",
  };
}
