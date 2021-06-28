'use strict'; 

const events = require('../events.js');

Payload = () => {
    this.store = 'ABC store',
    this.orderID = 1234567890,
    this.customer = 'Bill',
    this.address = 'ABC store On 1234 234 NE'
}

setInterval(() => {
    let payloadData = new Payload;
    events.emit('pickup', payloadData);
}, 5000);

events.on('delivered', (payload) => {
    console.log(`package ${payload.orderID} delivered! Thank you!`)
});

module.exports={Payload};