var Router = require("vertx-web-js/router");
var server = vertx.createHttpServer();

var router = Router.router(vertx);

router.get("/").handler(function (ctx) {
  // This handler will be called for "/" requests
  var response = ctx.response();
  response.putHeader("content-type", "text/plain;charset=utf-8");

  // Write to the response and end it
  response.end("Alô Vert.x! Executando o Vert.x pelo NPM!? \\o/");
});

server.requestHandler(router.accept).listen(8080);

// Call the console.log function.
console.log("Acesse http://localhost:8080");