#!/usr/bin/node
// Casts two arguments into integers to be added

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
const res = num1 + num2;

console.log(res);
