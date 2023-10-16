const express = require('express');

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    return res.end("Home Page");
});

app.get("/about", (req, res) => {
    return res.end("About us page");
});

app.listen(PORT, () => { console.log("Server has Started!"); });