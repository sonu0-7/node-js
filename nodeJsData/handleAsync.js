/* How to handle the drawback of async in node js... */

let a = 10; 
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        // b = 30; in the replacement assign other way like that resolve()
        resolve(30);
    }, 2000);
});

waitingData.then((data) => {
    b = data;
    console.log(a+b);
});