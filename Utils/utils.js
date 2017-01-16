const moment = require('moment');

module.exports = {
  isValidPeriod: function(start, end){
    if(!this.isValidDate(start) || !this.isValidDate(end)) {
      return false;
    }

    return moment(start).isBefore(end);
  },

  isValidDate: function(date){
    var d = moment(date);

    return d.isValid() && this.isInFuture(d);
  },

  isInFuture: function(date){
    return moment(date).isAfter(moment());
  }
}
