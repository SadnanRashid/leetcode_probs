var reverse = function (number) {
  const MAX = 2147483648;
  const MIN = -2147483648;
  const numString = Math.abs(number).toString();
  let flag = "";

  //   Check if more than MAX or less than MIN
  if (number > MAX) {
    return 0;
  } else if (number < MIN) {
    return 0;
  }
  //   check if the number is neg or pos
  if (number < 0) {
    flag = flag + "-";
  }

  for (i = numString.length - 1; i >= 0; i--) {
    flag = flag + numString[i];
  }
  return flag;
};

console.log(reverse(-1323214213412423));
