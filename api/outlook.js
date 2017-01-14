const Promise = require('promise');

module.exports = {
  createEvent: function(){

  },
  getRooms: function(){

  },
  book: function(room){

  },
  getRoomStatus: function(room){

  }
  isRoom: function(room){
    return new Promise(function(resolve, reject) {
      // TODO: To be adapted when using real outlook api
      resolve({
        name: 'Antibes',
        id: '7f7d331ce2b4',
        status: 'free'
      })
    });
  },
  isFree: function(room, start, duration){
    return new Promise(function(resolve, reject) {
      resolve(true);
    });
  }
}
