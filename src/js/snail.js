let snail = (arr) => {
  let result = [],
    line = 0,
    end = false;

  while (!end) {
    let level = 0,
      endRow = 0,
      endColumn = 0,
      reverse = false;

    if (!reverse) {
      for (endRow; endRow < arr[level].length; endRow += 1) {
        result.push(arr[level][endRow]);
        if (endRow == arr[level].length - 1) {
          endRow = endRow;
        }
      }
      for (level += 1; level < arr.length; level += 1) {
        result.push(arr[level][endRow - 1]);
        if (level == arr.length - 1) {
          endColumn = level;
          endRow -= 1;
          reverse = true;
        }
      }
    }
    if (reverse) {
      for (endRow -= 1; endRow >= 0; endRow -= 1) {
        result.push(arr[endColumn][endRow]);
      }
    }

    end = true;
    console.log(endRow);
  }

  return result;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
