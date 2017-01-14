const apiai = require('apiai');
const Promise = require('promise');
const moment = require('moment');
const app = apiai("YOUR_ACCESS_TOKEN");
const Slack = require('./slack');

module.exports = {
    reply: function(message) {
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
                    Slack.processCommand(command, args, sender).then(function(reply) {
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
