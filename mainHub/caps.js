'use strict'; 

const events = require('../events.js'); 


setInterval(() => {
    let date = new Date(); 
    let time = `${date.getHours()}:${date.getMinutes()}`;
    let payloadInfo = {
        event: 'pickup',
        time: time,
        payload: {
            store: 'ABC store',
            orderID: 1234567890,
            customer: 'Bill',
            address: 'ABC store On 1234 234 NE'
        }
    }
    events.emit('pickup', {payloadfInfo: payloadInfo})
}, 5000);

