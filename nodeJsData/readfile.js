const fs = require('fs');

fs.appendFileSync('code.txt', "This is the other new content.. :) ");

const buf_data = fs.readFileSync('code.txt');

const without_buf_data = fs.readFileSync('code.txt', 'utf-8');

console.log(without_buf_data);

// org_data = buf_data.toString();

// console.log(org_data);