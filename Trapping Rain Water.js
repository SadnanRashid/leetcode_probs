var trap = function (height) {
  let left = 0,
    right = 0;
  let i = 0,
    j = 0;
  let tempLeft = 0,
    tempRight = 0;

  for (i = 0; i < height.length; i++) {
    if (height[i] <= tempLeft) {
      left = tempLeft;
      tempLeft = left;
    } else {
      left = height[i];
      tempLeft = left;
    }
    // again
    if (height[height.length - i] <= tempRight) {
      right = tempRight;
      tempRight = right;
    } else {
      right = height[height.length - i];
      tempRight = right;
    }
    console.log(right, height[height.length - i]);
  }
};

console.log(trap([3, 1, 2, 4, 0, 1, 3, 2]));
