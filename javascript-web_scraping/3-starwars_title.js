##!/usr/bin/node

const request = require('request');
const api = 'http://swapi.co/api/films/';
const movie = process.argv[2];
let json;

request(api + movie, function (error, response, body) {
  if (error) {
    console.log(error);
    process.exit();
  }
  json = JSON.parse(body);
  console.log(json.title);
});
