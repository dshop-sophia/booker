const apiai = require('apiai');
const Promise = require('promise');
const moment = require('moment');
const Slack = require('./slack');

module.exports = {
    reply: function(message, env) {
        const app = apiai(env.apiAiToken);
        var type = message.type;
        var sender = message.originalRequest.user_name;
        var command = message.originalRequest.command;
        var args = [];

        if (message.text != "") {
            args = message.text.split(' ');
        }

        return new Promise(function(resolve, reject) {
            switch (message.type) {
                case 'slack-slash-command':
                    Slack.processCommand(command, args, sender, env).then(function(reply) {
                        resolve(reply);
                    }).catch(function(error) {
                        reject(error);
                    });
                    break;
                default:

            }
        });
    }
}
