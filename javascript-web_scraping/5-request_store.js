<<<<<<< HEAD
uyuyu;
=======
#!/usr/bin/node

require('request').get(process.argv[2], function (err, r, body) {
  if (err) {
    console.log(err);
  } else {
    require('fs').writeFile(process.argv[3], body, 'utf-8', function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});
>>>>>>> 854a928eb1b0c9c71f2e364b94811be6361c969e
