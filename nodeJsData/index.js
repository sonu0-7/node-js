/* First simple Static Api */
 
const http = require('http');

http.createServer((req, resp) =>{
    resp.writeHead(200, {'content-Type': 'application\json'});
    resp.write(JSON.stringify({name: 'sonu', email: 'sonu@test.com'}));
    resp.end();
}).listen(4444);

/* End of simple API */

/* Asynchronous Example */

// console.log('Start execution..');

// console.log('Second execution..');

// setTimeout(() => {
//     console.log('Logical execution..');
// }, 2000);

// console.log('Terminated execution..');

/* Other Asycronous example.. */
/*
let a = 10; 
let b = 0;
setTimeout(() => {
    b = 20;
}, 2000);

console.log('Summation of a + b is : ', a + b);
console.warn('This is the drawback of asyncronous operation..');
*/