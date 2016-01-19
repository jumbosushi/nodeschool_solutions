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

**This approach is synchronous**
It is blocking I/O!

###4. First  Async IO

fs.readFile is designed to be Async

readFile takes two parameters, file data to parse & function that
will be called once the file is done parsing.

callbacks are functions that can be passed to the function that would include
Asynchronous function, for example (readFile)

```javascript
function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}
```

###5 Filtered list
path.extname(file) gets the file extention name of a file in dir

###6 Make it Modular

Callbacks notes:
Call backs usually follows this format (according ot nodejitsu.com)

```javascript
function asyncOperation ( a, b, c, callback ) {
  // ... lots of hard work ...
  if ( /* an error occurs */ ) {
    return callback(new Error("An error has occured"));
  }
  // ... more work ...
  callback(null, d, e, f);
}

asyncOperation ( params.., function ( err, returnValues.. ) {
   //This code gets run after the async operation gets run
});

// from https://docs.nodejitsu.com/articles/getting-started/control-flow/what-are-callbacks
```
