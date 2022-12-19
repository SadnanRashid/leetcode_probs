var mergeKLists = function (array) {
  let i = 0,
    j = 0;
  const len = array.length;
  let answer = [0];
  let lenSub = 0;
  let answerCount = 0;

  for (i = 0; i < len; i++) {
    lenSub = array[i].length;
    for (j = 0; j < lenSub; j++) {
      answer[answerCount] = array[i][j];
      answerCount = answerCount + 1;
    }
  }
  return answer;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
