const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '0e9bce8f',
  apiSecret: 'kxL1WleXCue0KnIg'
})

const from = 'Nexmo'
const to = '94767915045'
const text = 'Hello from Nexmo'

nexmo.message.sendSms(from, to, text)