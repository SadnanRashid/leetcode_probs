var firstMissingPositive = function (nums) {
  const numSet = new Set(nums);
  const maxLoop = 1000000;
  for (let i = 1; i < maxLoop; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
};

let nums = [7, 8, 9, 11, 12];
console.log(firstMissingPositive(nums));
