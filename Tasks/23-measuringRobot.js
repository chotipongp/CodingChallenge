let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime.test('30-01-2003 15:20'))
console.log(dateTime.test('30-jan-2013 15:11'))
