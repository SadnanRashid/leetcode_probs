var romanToInt = function (s) {
  const map = {
    X: 10,
    V: 5,
    I: 1,
  };
  const len = s.length;
  let result = 0;
  let num1 = 0,
    num2 = 0;

  //LVIII //IV //VI

  for (let i = 0; i < len; i++) {
    num1 = map[s[i]];
    num2 = map[s[i + 1]];
    if (num1 > num2) {
      result = result + (num2 - num1);
    } else {
      result += num1 + num2;
      console.log(`${num1} ${num2} ${num1 - num2}`);
    }
  }
  return result;
};

console.log(romanToInt("XXVI"));
