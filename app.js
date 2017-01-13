const botBuilder = require('claudia-bot-builder');
const excuse = require('huh');

module.exports = botBuilder(function (message) {
  return 'Thanks for sending ' + message.text +
    'Your message is very important to us, but ' +
    excuse.get();
});
