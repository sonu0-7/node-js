/* when single method import then get data like this way..

    const add = require('./export');
    console.log(add(5, 10));
*/

/* when more than one method import then get data like this way.. but we cannot follow this way.. last one is better

    const export_data = require('./export');

    console.log(export_data.add(5, 10));
    //  During the calling of function, we called arguments not called paramets....

    console.log(export_data.name);
*/

const {add, name, sub, mul} = require('./export');
/* We can see the arguments where position or order is not matter our output getting correct.. */

console.log(add(5, 10));
console.log(sub(10, 5));
console.log(mul(10, 5));
console.log(name);