var lengthOfLongestSubstring = function (s) {
  let flag = new Map([]);
  let maxLen = 0,
    start = -1;
  for (let i = 0; i < s.length; i++) {
    if (flag[s[i]] > start) {
      start = flag[s[i]];
    }
    console.log(flag[s[i]]);
    flag[s[i]] = i;
    maxLen = Math.max(maxLen, i - start);
  }
  console.log(flag);
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

// Input: s = "abcabcbb"
// Output: 3
