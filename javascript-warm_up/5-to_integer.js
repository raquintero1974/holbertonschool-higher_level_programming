#!/usr/bin/node
/* prints My number: <first argument converted in integer> 
if the first argument can be converted to an integer */

let num = parseInt(process.argv[2]);
if (num) {
  console.log('My number: ' + num);
} else {
  console.log('Not a number');
}
