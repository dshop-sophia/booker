const botBuilder = require('claudia-bot-builder');
const Handler = require('./api/handler.js');

const api = botBuilder(function (message, originalApiRequest) {

  return Handler.reply(message, originalApiRequest.env).then(function(reply){
    return reply;
  }).catch(function(error){
    return error;
  });

}, {
  platforms: ['slackSlashCommand']
});

/*
api.addPostDeployConfig('apiAiToken', 'Enter your API.ai token:', 'configure-bot');
api.addPostDeployConfig('outlookToken', 'Enter your Outlook token:', 'configure-bot');
*/

module.exports = api;
