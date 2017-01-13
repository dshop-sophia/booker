const botBuilder = require('claudia-bot-builder');
const Handler = require('./api/handler.js');

module.exports = botBuilder(function (message) {

  let type = message.type;
  let sender = message.originalRequest.user_name;
  let command = message.originalRequest.command;
  let args = message.text.join(' ');

  Handler.processCommand(command, args, sender).then(function(reply){
    return reply;
  });
});
