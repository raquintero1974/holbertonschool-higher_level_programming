<<<<<<< HEAD
hhh;
=======
#!/usr/bin/node

require('request').get(process.argv[2], function (err, r) {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + r.statusCode);
  }
});
>>>>>>> 854a928eb1b0c9c71f2e364b94811be6361c969e
