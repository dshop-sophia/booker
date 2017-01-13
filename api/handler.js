const apiai = require('apiai');
const Promise = require('promise');
const app = apiai("YOUR_ACCESS_TOKEN");
const Outlook = require('./outlook')

module.exports = {
    process: function(input, intent) {
        return new Promise(function(resolve, reject) {
            // TODO: get answer from API.ai
            // TODO: depending on the intent, extra actions may be performed

            var request = app.textRequest(input);

            request.on('response', function(response) {
                console.log(response);
                resolve(response);
            });
            request.on('error', function(error) {
                console.log(error);
                reject(error);
            });
            request.end();
        });
    },

    processCommand: function(command, args, sender){
      return new Promise(function(resolve, reject) {
        var reply;
        switch (command) {
          case '/book':
            if(!args.length){
              reject('You should provide room name, meeting subject, start and end time of the meeting!');
            }else{
              var roomName = args[0];
              var subject = args[1];
              var startTime = args[2];
              var endTime = args[3];

              // TODO: Verify Arguments
              Outlook.isRoom(args[0]).then(function(room){
                if (Utils.isPeriod(startTime, endTime)) {
                  Outlook.isFree(room, startTime, endTime).then(function(free){
                    // TODO: book room
                    if(free){
                      reply = 'Hey ' + sender + ', I got your command ' + command + '. You sent me ' + args.length + ' argument(s)';
                    }else{
                      reply = 'Sorry Bro, room is taken !'
                    }
                    resolve(reply);
                  });
                }else{
                  reject('Start and End times are not correct !');
                }
              });
            }
            break;
          default:
            resolve('No Command, No execution !');
            break;
        }
      });
    }
}
