const botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(function (message) {

  console.log(JSON.stringify(message));

  return 'The booker app got your message ! ' + message.text;
});
