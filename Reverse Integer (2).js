var reverse = function (number) {
  const MAX = 2147483648; //1534236469
  const MIN = -2147483648;
  let ans = 0;
  while (number != 0) {
    ans = ans * 10 + (number % 10);
    number = number / 10;
    if (number > 0) {
      number = Math.floor(number);
    } else {
      number = Math.ceil(number);
    }
  }
  //   check MAX MIN
  if (ans > MAX) {
    return 0;
  } else if (ans < MIN) {
    return 0;
  }
  return ans;
};

console.log(reverse(-15361231239));
