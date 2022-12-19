var findCircleNum = (isConnected) => {
  const size = isConnected.length;
  const adjList = new Array(size).fill(0).map(() => []);
  let provinceCount = 0;
  let isVisited = new Array(size).fill(false);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i !== j && isConnected[i][j]) {
        adjList[i].push(j);
      }
    }
  }
  const queue = [];
  for (let a = 0; a < adjList.length; a++) {
    if (!isVisited[a]) {
      provinceCount++;
    } else {
      continue;
    }
    queue.push(adjList[a]);
    while (queue.length > 0) {
      const curr = queue.shift();
      for (let i = 0; i < curr.length; i++) {
        if (isVisited[curr[i]]) {
          continue;
        } else {
          queue.push(adjList[curr[i]]);
          isVisited[curr[i]] = true;
        }
      }
    }
  }
  return provinceCount;
};
