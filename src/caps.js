'use strict';

const events = require('../events');
const vendor = require('./vendor');
const driver = require('./driver');

// is here where I should set the interval or in the vendor files?
// Step 1: create order
setInterval(() => {
    vendor.newOrder();
}, 5000);

// event listeners
events.on('pickup', driver.pickUp);
events.on('inTransit', driver.delivered);
events.on('delivered', vendor.thankYou);