let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime.test('30-01-2003 15:20')) //true
console.log(dateTime.test('30-jan-2013 15:11')) //false

let notBinary = /[^01]/
console.log(notBinary.test('1101011010110')) //false
console.log(notBinary.test('1101011010112')) //true
