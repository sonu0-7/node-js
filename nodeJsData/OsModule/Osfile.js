const os = require('os');

// console.log(os.arch());

console.log(os.hostname());

console.log(os.platform());

console.log(os.release());

console.log(os.tmpdir());

console.log(os.type());

console.log(os.version());

console.log(os.machine());

// const freeMemory = os.freemem();
// console.log(freeMemory); // The output in bytes..
// To get the freeMemory in GB
// console.log(`The free memory is (GB) : ${freeMemory / 1024 /1024 / 1024}`); 

// const totalMemory = os.totalmem();
// console.log(`The total memory is (GB) : ${totalMemory / 1024 /1024 / 1024}`); 