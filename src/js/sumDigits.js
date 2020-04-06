// Хорошие решения
// sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);

// function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }

function sumDigits(number) {
  let arr = Math.abs(number).toString().split('');
  let sum = 0;
  arr.forEach((element) => {
    sum += parseInt(element);
  });
  return sum;
}

module.exports = sumDigits;
