// test file provided as the second argument
 var fs = require('fs')
 var buf = fs.readFileSync(process.argv[2]);
 var str = buf.toString()
 var num_newl = str.split("\n").length;
 console.log(num_newl - 1);
