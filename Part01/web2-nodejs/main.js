var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }

  console.log("url: ", _url);
  console.log("queryData:  ", queryData);
  console.log("queryData.id:  ", queryData.id);

  if (_url == "/") {
    _url = "/index.html";
  }

  response.writeHead(200);
  response.end(queryData.id);
  // console.log(__dirname + _url);
  // response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000); // 웹 포트 설정
