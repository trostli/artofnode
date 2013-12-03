var fs = require('fs')

var collector = function(err, list){
  for(var i=0;i<list.length;i++){
    var file = list[i].split('.')
    if (file[1] === process.argv[3]) {
      console.log(file.join('.'))
    };
  }
}

var contents = fs.readdir(process.argv[2], collector)
