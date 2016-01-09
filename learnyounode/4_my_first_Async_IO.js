// test file provided as the second argument
 var fs = require('fs')
 var str;
 var num_newl;

function readThis(callback) {
  fs.readFile(process.argv[2], function doneReading(err, data) {
    str = data.toString();
    num_newl = str.split("\n").length;
    callback()
  })
}

function printNum() {
  console.log(num_newl - 1);
}

readThis(printNum);

//---------------------------
// Solution
var fs = require('fs')
var file = process.argv[2]
fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
