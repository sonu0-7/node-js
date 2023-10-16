const EventEmitter = require('events');

const event = new EventEmitter();

/*
    event.on('sayHello', () => {
        console.log("Hii, Sonu..");
    });

    event.on('sayHello', () => {
        console.log("Mr.Kumar");
    });
    event.emit('sayHello');
*/

event.on('checkStatus', (status, msg) => {
    console.log(`The Status is ${status} and message is ${msg}`);
});

event.emit('checkStatus', 200, 'ok');