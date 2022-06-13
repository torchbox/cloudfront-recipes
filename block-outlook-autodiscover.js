/*
Block Outlooks' autodiscover.xml requests at the edge.

Should be associated wth a distribution under "Viewer request".
*/

function handler(event) {
  var request = event.request;

  if (request.uri == "/autodiscover/autodiscover.xml") {
    return { statusCode: 404, statusDescription: "Not found" };
  }

  return request;
}
