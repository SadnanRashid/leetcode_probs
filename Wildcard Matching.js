var isMatch = function (s, p) {
  let i = 0;

  for (i = 0; i < s.length; i++) {
    if (p[i] === "*") {
      if (p[i - 1] === undefined) {
        return true;
      }
    }
    if (s[i] !== p[i] && p[i] !== "?") {
      return false;
    }
  }
  return true;
};

console.log(isMatch("cb", "?a"));
