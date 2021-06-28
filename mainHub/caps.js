'use strict'; 

const events = require('../events.js'); 

require('../driver/driver.js');
require('../vendor/vendor.js');

events.on('pickup', pickUpHandler); 
events.on('in-transit', inTransitHandler);
events.on('delivered', deliveredHandler);

pickUpHandler= (payload) => {
    let theInfo = {
        event: 'pickup',
        time: new Date(),
        payload: payload
    };
    console.log('EVENT ', theInfo);
}
inTransitHandler= (payload) => {
    let theInfo = {
        event: 'in-transit',
        time: new Date(), 
        payload: payload
    }
    console.log('EVENT ', theInfo);
}
deliveredHandler= (payload) => {
    let theInfo = {
        event: 'delivered',
        time: new Date(), 
        payload: payload
    }
    console.log('EVENT', theInfo); 
}

module.exports = {
    pickUpHandler = pickUpHandler,
    inTransitHandler = inTransitHandler,
    deliveredHandler = deliveredHandler
};



