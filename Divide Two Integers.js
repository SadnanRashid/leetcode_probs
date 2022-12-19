const MAX = 2147483647;
const MIN = -2147483648;

//

var divide = function (dividend, divisor) {
  //
  let i = 0,
    j = 0,
    temp = 1,
    count = 0,
    devise = divisor,
    isNeg = false;

  //Check if cross big int or small int
  const cross = isCross(dividend, divisor);
  if (cross === "big") {
    return MAX;
  } else if (cross === "small") {
    return MIN;
  }

  if (dividend < 0 || divisor < 0) {
    isNeg = true;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    devise = divisor;
  } //isNeg true if any param is neg

  for (i = 0; i <= dividend; i++) {
    if (devise + divisor < dividend) {
      temp = temp + 1;
      devise = devise + divisor;
      count = count + 1;
    } else if (count === 0) {
      return 0;
    }
  }

  if (isNeg) {
    temp = -temp;
  } //return neg temp if any peram is neg

  return temp;
};

// const ans = divide(0, 1);
// console.log(ans);

function isCross(dividend, divisor) {
  if (dividend > MAX || divisor > MAX) {
    return "big";
  } else if (dividend < MIN || divisor < MIN) {
    return "small";
  } else {
    return "okay";
  }
}
