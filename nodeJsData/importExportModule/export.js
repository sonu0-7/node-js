const add = (a, b) => {
    // During the inialization time, we called parameters not arguments.
    return a + b;
};

const sub = (a, b) => {
    // During the inialization time, we called parameters not arguments.
    return a - b;
};

const mul = (a, b) => {
    // During the inialization time, we called parameters not arguments.
    return a * b;
};
const name = "Sonu";

/* If single function passed, suppose we have to export multiple fun then it doesn't work... */
// module.exports = add;

/* Another way that is used to export more than one func or properties.. */
/*
    module.exports.add = add;
    module.exports.name = name;
*/

/* This is the simplest way to apply for any data export in the form of object... */

module.exports = {add, sub, mul, name};