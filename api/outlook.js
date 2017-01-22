const Outlook = require("node-outlook");
const Promise = require('promise');

// Set the API endpoint to use the v2.0 endpoint
Outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');

module.exports = {
    createEvent: function() {

    },
    getRooms: function() {

    },
    book: function(room) {

    },
    getRoomStatus: function(room) {

    },
    getRoomEvents: function(room, env) {
        // This is the oAuth token
        var token = env.outlookToken;

        // Set up oData parameters
        var queryParams = {
            '$select': 'Subject,Start,End',
            '$orderby': 'Start/DateTime desc',
            '$top': 20
        };

        // Pass the user's email address
        var userInfo = {
            email: 'sarad@contoso.com'
        };

        outlook.calendar.getEvents({
                token: token,
                folderId: 'Inbox',
                odataParams: queryParams,
                user: userInfo
            },
            function(error, result) {
                if (error) {
                    console.log('getEvents returned an error: ' + error);
                } else if (result) {
                    console.log('getEvents returned ' + result.value.length + ' events.');
                    result.value.forEach(function(event) {
                        console.log('  Subject:', event.Subject);
                        console.log('  Start:', event.Start.DateTime.toString());
                        console.log('  End:', event.End.DateTime.toString());
                    });
                }
            });
    },
    isRoom: function(room) {
        return new Promise(function(resolve, reject) {
            // TODO: To be adapted when using real outlook api
            resolve({
                name: 'Antibes',
                id: '7f7d331ce2b4',
                status: 'free'
            })
        });
    },
    isFree: function(room, start, duration) {
        return new Promise(function(resolve, reject) {
            resolve(true);
        });
    }
}
