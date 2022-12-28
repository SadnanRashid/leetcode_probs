var maxArea = function (height) {
  let flag = 0,
    temp = 0,
    i = 0,
    j = 0;
  let maxArea = 0;
  const len = height.length;

  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (height[i] > height[j]) {
        temp = height[j] * (j - i);
      } else {
        temp = height[i] * (j - i);
      }
      //   flag = Math.min(height[i], height[j]);
      //   temp = flag * Math.abs(i - j);
      if (temp > maxArea) {
        maxArea = temp;
      }
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
