const express = require('express');

const app = express();
// ('/') it's denote the root directory or domain eg. www.youtube.com
app.get('/', (req, res) => {
    res.send('Welcome to the implementation of Express Js...');
});

// create Routing 

app.get('/about', (req, res) => {
    res.send('Welcome to the About Page...It is created with the help of Routing....');
});

// pass the object
app.get('/contact', (req, res) => {
    res.send({
        id : 1,
        email : 'sonu@gmail.com'
    });
});

// pass the object using res.json()
app.get('/jsonData', (req, res) => {
    res.json({
        id : 1,
        email : 'json@gmail.com'
    });
});

// to pass the array object using router
app.get('/temp', (req, res) => {
    res.send([{
        id : 1,
        email : 'sonu@gmail.com'
    },
    {
        id : 1,
        email : 'sonu@gmail.com'
    },
    {
        id : 1,
        email : 'sonu@gmail.com'
    }
]);
});

// pass the HTML element/Data
app.get('/home', (req, res) => {
    res.write('<h1>Welcome to the Home Page...<h1>');
    res.send();
    // if we not write the res.send() method then it thinks and wait that i will get other request that's why is take more time so for better performance we use res.send() tell that all the request has completed and close the connection..
});

app.listen(3000, () => {
    console.log('listening the port at 3000');
});