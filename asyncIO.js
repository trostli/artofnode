var fs = require('fs')

var collector = function(err, data){
  var newLineCount = data.split('\n').length - 1
  console.log(newLineCount)
}

var contents = fs.readFile(process.argv[2], 'utf8', collector)
