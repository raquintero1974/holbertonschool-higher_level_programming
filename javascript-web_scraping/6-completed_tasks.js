<<<<<<< HEAD
6;
=======
#!/usr/bin/node

require('request').get(process.argv[2], function (err, r, body) {
  if (err) {
    console.log(err);
  } else {
    let res = {};
    let temp = JSON.parse(body);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].completed) {
        if (!(temp[i].userId in res)) {
          res[temp[i].userId] = 0;
        }
        res[temp[i].userId] += 1;
      }
    }
    console.log(res);
  }
});
>>>>>>> 854a928eb1b0c9c71f2e364b94811be6361c969e
