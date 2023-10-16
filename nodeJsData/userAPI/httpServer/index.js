const http = require('http');

const fs = require('fs');

const org_data = fs.readFileSync('userAPI/userapi.json', "utf-8");
const data = JSON.parse(org_data);

const Server = http.createServer((req, resp) => {
    if(req.url == "/"){
        resp.writeHead(200, { "content-type" : "text/html" });
        resp.end('Welcome to the Home page..');
    } else if(req.url =="/userapi"){
        /* This is used for apply async
            resp.writeHead(200, {"content-type" : "application/json"});
            resp.write('Welcome to the user api <br>');
            fs.readFile('userAPI/userapi.json', "utf-8", (err, data) => {
                // console.log(data);
                // resp.write(data);
                data = JSON.parse(data);
                resp.end(data[0].email);
       
            });
         */
    
        // resp.writeHead(200, { "content-type" : "application/json" });
        resp.writeHead(200, { "content-type" : "text/html" });
        resp.write('Welcome to the user api <br>');
        resp.end(data[0].email);

    }
    else{
        resp.writeHead(404, {"content-type" : "text/html"});
        resp.end('<h1> 404 error this page not found </h1>');
    }
});

Server.listen(4444, '127.0.0.1', ()=> {
    console.log('Listening to the port 4444');
});