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

/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/
