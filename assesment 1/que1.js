var searchInsert = function (nums, target) {
  let i = 0,
    temp = 0;
  const length = nums.length;

  for (i = 0; i < length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] < target && nums[i + 1] > target) {
      temp = i + 1;
    } else if (temp === 0 && i === length - 1) {
      if (target > nums[0]) {
        return length;
      }
      return 0;
    }
  }
  return temp;
};

console.log(searchInsert([2, 3, 5, 6], 7));
