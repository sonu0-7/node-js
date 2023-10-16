const fs = require('fs');

const http = require('http');

const Server = http.createServer();

Server.on('Request', (req, res) => {

    // This is older way
    // fs.readFile('input.txt', (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toSting());
    // });

    // other way is 
    // const rsteam = fs.createReadStream('input.txt');

    // rstream.on("data" (chunkdata) => {
    //     res.write(chunkdata);
    // });

    // rsteam.on('end', () => {

    // });

    // 3rd way

    // const rstream = fs.createReadStream('input.txt');
    // rstream.pipe(res);
});

Server.listen(8000, '127.0.0.1');