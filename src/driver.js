'use strict';

const events = require('../events');

// Step 2: pickup order
function pickUp(payload) {
    console.log('EVENT ', payload); // event: pickup
    console.log(`DRIVER: picked up ${payload.payload.orderID}`);
    setTimeout(() => {
        events.emit('inTransit', payload); // to wait one second before the event inTransit called
    }, 1000);
}

// Step 3: Order in transit
function delivered(payload) {
    payload.event = 'inTransit';
    payload.time = new Date().toISOString(); // this is one second later
    console.log('EVENT ', payload); // event: in transit
    setTimeout(() => {
        console.log(`DRIVER: delivered up ${payload.payload.orderID}`); // this should be 3 seconds later
        events.emit('delivered', payload);
    }, 3000);
}

module.exports = { pickUp, delivered };