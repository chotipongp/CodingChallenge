function checkIsUsername(str) {
  return /^[A-Za-z0-9]{4,20}$/.test(str)
}

console.log(checkIsUsername('famenaja'))
console.log(checkIsUsername('famenaja$$'))
