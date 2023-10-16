const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public');

// to set the view engine
app.set('view engine' , 'hbs');
// Assuming your view files are in the "public" directory
// app.set('views', folderPath);

// Serve static files from the "public" directory

// app.use(express.static(staticPath));

// Template engine route
app.get("/", (req, res) => {
    res.render('index');
});

app.get('/', (req, res) => {
    res.send('welcome for learning..');
});

app.listen(PORT, ()=>{
    console.log(`Listening at the Port ${PORT}`);
});