var strStr = function (haystack, needle) {
  let i = 0,
    j = 0,
    k = 0,
    temp = 0;

  for (i = 0; i < haystack.length; i++) {
    temp = 0;
    for (j = i; j <= i + needle.length; j++) {
      if (haystack[j] === needle[temp]) {
        console.log("found" + j + needle.length);
        if (temp === needle.length - 1) {
          return i;
        }
        temp = temp + 1;
      } else if (haystack[j] !== needle[temp]) {
        break;
      }
    }
    // console.log(`${temp} .. ${i}`);
  }
  return -1;
};

const ans = strStr("mississippi", "sad");
console.log(ans);

// "sadbutsad" "sad" => 0
