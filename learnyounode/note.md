#learnyounode notes
Taking notes on key concepts in each problem

###2. Baby Steps
process.argv returns the string written after the command.

Keep in mind the elements in array will all be String!

```javascript
console.log(process.argv);

//cmd: node test.js 1 2 3
// Returns ['node', 'test.js', '1', '2', '3']
```

###3. First IO
Require 'fs' core library to do filesystem operation!

Global modules can be accessed by
```javascript
 var fs = require('fs')
```

The module can now be accesed by "fs" variable!
(similar way as express)

The following will return Buffer object that has everything in a file.
```javascript
fs.readFileSync('path/file')
```

What is Buffer?
Node's way of storing info
.toString() converts it to string 
