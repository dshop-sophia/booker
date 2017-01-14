const botBuilder = require('claudia-bot-builder');
const Handler = require('./api/handler.js');

module.exports = botBuilder(function (message) {

  return Handler.reply(message).then(function(reply){
    return reply;
  }).catch(function(error){
    return error;
  });

});
