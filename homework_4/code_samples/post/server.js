const fs = require('fs');
const http = require("http");
const querystring = require("querystring");

function onRequest(request, response) {
    if (request.url == '/index.html') {
        response.setHeader('content-type', 'text/html');
        fs.createReadStream('./index.html').pipe(response)
    } else {
        let postData = "";
        let myTextAreaValue;
        request.setEncoding("utf8");
        request.on("data", function (postDataChunk) {
            postData += postDataChunk;
        });
        request.on("end", function () {
            myTextAreaValue = querystring.parse(postData).text;
            response.end(`You posted: ${myTextAreaValue}`);
        });
    }
}
http.createServer(onRequest).listen(8888);
console.log("Server has started on port 8888.");
