function calculateNumber(n) {
  let sum = 0,
    num = 0;
  while (n !== 0) {
    num = n % 10;
    sum += num;
    n = Math.floor(n / 10);
  }
  console.log(sum);
}

calculateNumber(11532);
