const botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(function (message) {
  return 'The booker app got your message ! ' + message;
});
