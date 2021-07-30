'use strict';

const events = require('../events.js');
require('../driver/driver.js');

module.exports = (payloadInfoExport) => {
console.log(`EVENT`, payloadInfoExport.payloadInfo);
setTimeout(function () { 
    events.emit('driver', { 
        payloadInfo: payloadInfoExport.payloadInfo }) 
        }, 1000);
}