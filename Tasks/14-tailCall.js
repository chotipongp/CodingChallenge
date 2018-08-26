"use strict";

function factorial(value) {
  return callFunc(1, value);
}

function callFunc(temp, val) {
  if (val <= 1) {
    return temp;
  } else {
    return callFunc(temp * val, val - 1);
  }
}

console.log(factorial(4));
console.log(factorial(2000));
