var isMatch = function (array, target) {
  let left = 0;
  let right = array.length - 1;
  let ans = [0];

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);
    console.log(left, right, middle);

    if (array[middle] === target) {
      ans.push(middle);
      right = right - 1;
      console.log(ans);
    } else if (array[middle] > target) {
      right = right - 1;
    } else {
      left = left - 1;
    }
  }
  return ans;
};

console.log(isMatch([2, 4, 6, 8], 6));

// 1 3 5 7 : 2 4 5 8
