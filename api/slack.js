const Promise = require('promise');
const moment = require('moment');
const Outlook = require('./outlook');
const Utils = require('../Utils/utils');

module.exports = {
  processCommand: function(command, args, sender){
    return new Promise(function(resolve, reject) {
      var reply;
      switch (command) {
        case '/book':
          if(!args.length){
            reject('You should provide room name, meeting subject, start time and date and duration of the meeting!');
          }else{
            var roomName = args[0];
            var subject = args[1];
            var time = args[2];
            var date = args[3];
            var duration = args[4];

            // TODO: Verify Arguments
            Outlook.isRoom(args[0]).then(function(room){
              if (Utils.isValid(start)) {
                Outlook.isFree(room, startTime, duration).then(function(free){
                  // TODO: book room
                  if(free){
                    reply = 'Hey ' + sender + ', I got your command ' + command + '. You sent me ' + args.length + ' argument(s)';
                  }else{
                    reply = 'Sorry Bro, room is already taken !'
                  }
                  resolve(reply);
                });
              }else{
                reject('Start time and not are not valid !');
              }
            });
          }
          break;
        default:
          resolve('No Command, No execution ! No Pain, No Gain !');
          break;
      }
    });
  }
}
