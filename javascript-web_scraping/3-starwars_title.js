<<<<<<< HEAD
uyt;
=======
#!/usr/bin/node

require('request').get('http://swapi.co/api/films/' + process.argv[2] + '/', function (err, r, body) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});
>>>>>>> 854a928eb1b0c9c71f2e364b94811be6361c969e
