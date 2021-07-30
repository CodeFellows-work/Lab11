  
'use strict';

module.exports = (payloadInfoExport) => {
  let date = new Date();
  let time = `${date.getHours()}:${date.getMinutes()}`;
  payloadInfoExport.payloadInfo.time = time;
  payloadInfoExport.payloadInfo.event = 'delivered';
  console.log(`DRIVER: delivered ${payloadInfoExport.payloadInfo.payload.orderID}`);
  console.log('EVENT', payloadInfoExport.payloadInfo);
}