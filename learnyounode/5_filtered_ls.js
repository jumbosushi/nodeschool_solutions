var fs = require('fs')
var file = process.argv[2]
var check = process.argv[3];
fs.readdir(file, function (err, data) {
  var result = ""
  for(var i=0; i < data.length; i++) {
    var periodCheck = data[i].indexOf(".");
    if (periodCheck != -1)
      if (data[i].substr(periodCheck + 1) == check)
        result += data[i].toString() + "\n"
  }
  console.log(result);
})

// Solution
var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2], function (err, list) {
 list.forEach(function (file) {
   if (path.extname(file) === '.' + process.argv[3])
     console.log(file)
 })
})
