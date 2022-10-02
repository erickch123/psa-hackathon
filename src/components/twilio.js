const twilio = require('twilio');

const accountSid = 'AC05228fb8f6ecabde4276ceeeaab88ddc'; // Your Account SID from www.twilio.com/console
const authToken = '3a1231cdb7fd688084a38936d51ea256'; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken); 


var phonenums = ['+6582982984']

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
async function sendEnteredMsg(phonenums) {
    for (let i = 0; i < phonenums.length; i++){
        await client.messages 
        .create({ 
           body: 'Visitor has entered PSA', 
           from: 'whatsapp:+14155238886',       
           to: 'whatsapp:'+phonenums[i] 
         }) 
        .then(message => console.log(message.sid)) 
        .done();
        console.log(phonenums[i]);
        await delay(1000);
        console.log('after 1 second');
    }
}

async function sendWorkplaceMsg(phonenums) {
  for (let i = 0; i < phonenums.length; i++){
      await client.messages 
      .create({ 
         body: 'Visitor has reached the workplace.', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:'+phonenums[i] 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
      console.log(phonenums[i]);
      await delay(1000);
      console.log('after 1 second');
    }
}

async function sendCompletedMsg(phonenums) {
    for (let i = 0; i < phonenums.length; i++){
        await client.messages 
        .create({ 
           body: 'Visitor is on the way out of PSA.', 
           from: 'whatsapp:+14155238886',       
           to: 'whatsapp:'+phonenums[i] 
         }) 
        .then(message => console.log(message.sid)) 
        .done();
        console.log(phonenums[i]);
        await delay(1000);
        console.log('after 1 second');
      }
  }

  async function sendOutMsg(phonenums) {
    for (let i = 0; i < phonenums.length; i++){
        await client.messages 
        .create({ 
           body: 'Visitor has exited PSA.', 
           from: 'whatsapp:+14155238886',       
           to: 'whatsapp:'+phonenums[i] 
         }) 
        .then(message => console.log(message.sid)) 
        .done();
        console.log(phonenums[i]);
        await delay(1000);
        console.log('after 1 second');
      }
  }

  async function sendWarningMsg(phonenums) {
    for (let i = 0; i < phonenums.length; i++){
        await client.messages 
        .create({ 
           body: 'Visitor is taking longer than expected, please contact relevant parties.', 
           from: 'whatsapp:+14155238886',       
           to: 'whatsapp:'+phonenums[i] 
         }) 
        .then(message => console.log(message.sid)) 
        .done();
        console.log(phonenums[i]);
        await delay(1000);
        console.log('after 1 second');
      }
  }
  sendWarningMsg(phonenums)
  



  