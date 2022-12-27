<<<<<<< HEAD
gf;
=======
#!/usr/bin/node

let fs = require('fs');
let argstr = process.argv[3];
fs.writeFile(process.argv[2], argstr, function (err, argstr) {
  if (err) {
    console.log(err);
  }
});
>>>>>>> 854a928eb1b0c9c71f2e364b94811be6361c969e
