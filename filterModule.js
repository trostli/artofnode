module.exports = function(path, filter, cb){
  var fs = require('fs')

var contents = fs.readdir(path, cb)

  var cb = function(err, list, filter){
    for(var i=0; i<list.length; i++){
      var file = list[i].split('.')
      if (file[1] === filter) {
        return file.join('.')
      };
    }
  }
}