'use strict'; 

'use strict';
const events =require('../events.js');


describe('testing event handlers', ()=> {
  let payload = {
    store :'ABC Store',
    orderID : '12345678910',
    customer : 'Dwayne "The Rock" Johnson',
    address : 'ABC Store at 12345 333th St SW',
  };
events.emit = jest.fn();
// console.log = jest.fn();
  it('test pickup', async ()=> {
    events.emit('pickup',payload);
    expect(events.emit).toHaveBeenCalled();
  });

  it('test in-transit', async ()=> {
    events.emit('in-transit',payload);
    expect(events.emit).toHaveBeenCalled();
  });

  it('test delivered', async ()=> {
    events.emit('delivered',payload);
    expect(events.emit).toHaveBeenCalled();
  });
    
});
