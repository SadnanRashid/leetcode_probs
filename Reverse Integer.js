var reverse = function (number) {
  const MAX = 2147483648;
  const MIN = -2147483648;
  const numString = Math.abs(number).toString();
  let flag = "";

  //   check if the number is neg or pos
  if (number < 0) {
    flag = flag + "-";
  }

  for (i = numString.length - 1; i >= 0; i--) {
    flag = flag + numString[i];
  }
  return flag;
};

console.log(reverse(-123));
