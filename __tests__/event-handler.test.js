'use strict'; 

const events =require('../events.js');
const deliveryHandler = require('../driver/delivery/deliveryHandler');
const driverHandler = require('../driver/driverHandler.js');
const pickUpHandler = require('../vendor/pickUpHandler.js');

describe('testing event handlers', ()=> {
  events.emit = jest.fn();
  console.log = jest.fn();

  let date = new Date(); 
  let time = `${date.getHours()}:${date.getMinutes()}`;
  
  it('test pickup handler', async ()=> {
    pickUpHandler({
      payloadInfo: {
        event: 'pickup',
        time: time,
        payload: {
          store: 'ABC Store',
          orderId: '12345678910',
          customer: 'Dwayne "The Rock" Johnson',
          address: 'ABC Store Hawaii'
        }
      }
    })
    expect(console.log).toHaveBeenCalled();
    expect(events.emit).not.toHaveBeenCalled();
  });
    it('test delivery handler', async () => {
      deliveryHandler({
        payloadInfo: {
          event: 'delivered',
          time: time,
          payload: {
            store: 'ABC Store',
            orderId: '12345678910',
            customer: 'Dwayne "The Rock" Johnson',
            address: 'ABC Store Hawaii'
          }
        }
      })
      expect(console.log).toHaveBeenCalled();
      expect(events.emit).not.toHaveBeenCalled(); 
    });
    it('test driver handler or in-transit', async () => {
      driverHandler({
        payloadInfo: {
          event: 'in-transit',
          time: time,
          payload: {
            store: 'ABC Store',
            orderId: '12345678910',
            customer: 'Dwayne "The Rock" Johnson',
            address: 'ABC Store Hawaii'
          }
        }
      })
      expect(console.log).toHaveBeenCalled();
      expect(events.emit).not.toHaveBeenCalled(); 
    });
});
