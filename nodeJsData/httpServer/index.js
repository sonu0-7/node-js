const http = require('http');

const server = http.createServer((req, resp) => {
    // console.log(req.url);
    if(req.url == "/"){
        resp.writeHead(200, {"content-type" : "text/html"});
        resp.end("Hello, this is the server's generated response..");
    }
    else if(req.url == "/contact"){
        resp.writeHead(200, {"content-type" : "text/html"});
        resp.end("This is the Contact Us page..");
    }
    else if(req.url == "/about"){
        resp.writeHead(200, {"content-type" : "text/html"});
        resp.end("This is the About us page..");
    }
    else{
        resp.writeHead(404, {"content-type" : "text/html"});
        resp.end("<h1> 404 Page not Found </h1>");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on Port no 8000:');
})