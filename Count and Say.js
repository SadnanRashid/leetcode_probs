var countAndSay = function (n) {
  let temp = 0,
    i = 0,
    count = 0;
  let num = "1";
  let res = "1";
  for (i = 0; i < n; i++) {
    let target = num[0];
    for (let j = 0; j < num.length; j++) {
      if (num[j] === target) {
        count++;
        // console.log(j);
      } else {
        res = res + count + target;
        console.log(res);
        count = 0;
        target = num[j];
      }
      num = res + count + target;
      console.log(num);
    }
  }
  return res;
};

console.log(countAndSay(4));
// 1 11 21 1211
