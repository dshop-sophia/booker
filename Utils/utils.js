const moment = require('moment');

module.exports = {
  isValidPeriod: function(start, end){
    if(!this.isValid(start) || !this.isValid(end)) {
      return false;
    }

    return moment(start).isBefore(end);
  },

  isValid: function(date){
    return moment(date).isValid();
  }
}
