function handler(event) {
  var request = event.request;

  if (request.uri == "/autodiscover/autodiscover.xml") {
    return { statusCode: 404, statusDescription: "Not found" };
  }

  return request;
}
