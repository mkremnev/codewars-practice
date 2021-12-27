//лучшая практика
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
  let obj = {};
  arr.reduce((a, e) => {
    typeof a[e] !== 'undefined' ? (a[e] += 1) : (a[e] = 1);
    return a;
  }, obj);

  for (key in obj) {
    if (obj[key] % 2 !== 0) return +key;
  }
}

module.exports = findOdd;
