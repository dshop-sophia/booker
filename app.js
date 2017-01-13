const botBuilder = require('claudia-bot-builder');
const Handler = require('./api/handler.js');

module.exports = botBuilder(function (message) {

  var type = message.type;
  var sender = message.originalRequest.user_name;
  var command = message.originalRequest.command;
  var args = [];
  if (message.text != "") {
    args = message.text.split(' ');
  }


  console.log('sender: ' + sender +  ' command: ' + command + ' args: ' + JSON.stringify(args));

  return Handler.processCommand(command, args, sender).then(function(reply){
    return reply;
  }).catch(function(error){
    return error;
  });

});
