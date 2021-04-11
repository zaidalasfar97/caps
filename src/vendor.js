'use strict';

require('dotenv').config();
const events = require('../events');
const faker = require('faker');
const storeName = process.env.STORENAME;

function createOrder() {
    let order = {
        store: storeName,
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    };
    return order;
}

function newOrder() {
    console.log('New order is ready to pickup');
    events.emit('pickup', {
        event: 'pickup',
        time: new Date().toISOString(),
        payload: createOrder(),
    });
}

// still not sure about the timeouts
// Step 4: Order delivered
function thankYou(payload) {
    payload.event = 'delivered';
    payload.time = new Date().toISOString();
    console.log(`VENDOR: Thank you for delivering ${payload.payload.orderID}`);
    console.log('EVENT ', payload);
}

module.exports = {
    newOrder,
    thankYou,
};
