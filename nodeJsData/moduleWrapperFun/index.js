//  This is written for understanding purpose how wrapper function works or consider our written code..
// () : This is a group operator
//  function : it is an anonymous func 

( function (exports, require, module, __filename, __dirname) {
    const a = require('fs');
    const name = "Sonu";
    console.log(name);
    module.exports = { xyz};
} );

/* 
    Wrapper Function actually works like that..
    suppose we write like it..

    const a = require("fs");
    
    and already written the code how the wrapper function write and consider.. that's why all the var, properties and methods are bound as a private... that's the main reason.. and one concept in advance javascipt is IIFE(Imediately Invoked Function Expression..)
*/