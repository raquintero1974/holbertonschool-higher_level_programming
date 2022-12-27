<<<<<<< HEAD
tt;
=======
#!/usr/bin/node

let fs = require('fs');
fs.readFile(process.argv[2], function (err, contents) {
  if (!err) {
    console.log(contents.toString().trim());
  } else {
    console.log(err);
  }
});
>>>>>>> 854a928eb1b0c9c71f2e364b94811be6361c969e
