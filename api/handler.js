const apiai = require('apiai');
const Promise = require('promise');
const app = apiai("YOUR_ACCESS_TOKEN");


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
    }
}
