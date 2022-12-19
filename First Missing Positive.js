var firstMissingPositive = function (nums) {
  //
  let i = 0,
    j = 0,
    temp = 0;
  let isOne = false;
  //
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      isOne = true;
      break;
    }
  }
  return isOne;
};

let nums = [1, 2, 0];
console.log(firstMissingPositive(nums));
