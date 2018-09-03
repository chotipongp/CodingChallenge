let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime.test('30-01-2003 15:20')) //true
console.log(dateTime.test('30-jan-2013 15:11')) //false

let notBinary = /[^01]/
console.log(notBinary.test('1101011010110')) //false
console.log(notBinary.test('1101011010112')) //true

console.log(/'\d+'/.test("'123'")) //true
console.log(/'\d+'/.test("''")) // false
console.log(/'\d*'/.test("'123'")) //true
console.log(/'\d*'/.test("''")) //true

let neighbor = /neighbou?r/
console.log(neighbor.test('neighbour')) //true
console.log(neighbor.test('neighbor')) //true

let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
console.log(dateTime2.test('30-1-2003 8:45')) //true

let cartoonCrying = /boo+(hoo+)+/i
console.log(cartoonCrying.test('Boohoooohoohooo')) //true
