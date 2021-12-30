const snail = (arr) => {
  const result = [];
  let end = false;

  while (!end) {
    let level = 0;
    let endRow = 0;
    let endColumn = 0;
    let reverse = false;

    if (!reverse) {
      for (let endRowCurrent = endRow; endRow < arr[level].length; endRow += 1) {
        result.push(arr[level][endRow]);
        if (endRow === arr[level].length - 1) {
          endRow = endRowCurrent;
        }
      }
      for (let levelCurrent = level + 1; level < arr.length; level += 1) {
        result.push(arr[level][endRow - 1]);
        if (level === arr.length - 1) {
          endColumn = levelCurrent;
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
