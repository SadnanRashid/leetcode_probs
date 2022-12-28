var maxArea = function (height) {
  let flag = 0,
    temp = 0,
    i = 0,
    j = 0;
  let maxArea = 0;

  for (i = 0; i < height.length; i++) {
    for (j = i + 1; j < height.length; j++) {
      flag = Math.min(height[i], height[j]);
      temp = flag * Math.abs(i - j);
      if (temp > maxArea) {
        maxArea = temp;
      }
    }
  }
  return maxArea;
};

console.log(maxArea(height));
