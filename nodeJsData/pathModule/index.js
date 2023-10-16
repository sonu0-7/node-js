const path = require('path');

console.log(path.dirname("F:/Nodejs/pathModule/index.js"));
console.log(path.extname("F:/Nodejs/pathModule/index.js"));
console.log(path.basename("F:/Nodejs/pathModule/index.js"));

console.log(path.parse("F:/Nodejs/pathModule/index.js"));
/* Output of the parse
{
    root: 'F:/',
    dir: 'F:/Nodejs/pathModule',
    base: 'index.js',
    ext: '.js',
    name: 'index'
}
*/

const parseObj = path.parse("F:/Nodejs/pathModule/index.js");
console.log(parseObj.base);