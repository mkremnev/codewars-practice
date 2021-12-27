// Прикольные решения
// const arithmetic = (a, b, operator) => ({
//   'add'     : a + b,
//   'subtract': a - b,
//   'multiply': a * b,
//   'divide'  : a / b
// }[operator]);

function arithmetic(a, b, operator) {
  let result = 0;
  switch (operator) {
    case 'add':
      return (result = a + b);
      break;
    case 'subtract':
      return (result = a - b);
      break;
    case 'multiply':
      return (result = a * b);
      break;
    case 'divide':
      return (result = a / b);
      break;
    default:
      console.log('Input operators');
  }
  return result;
}

module.exports = arithmetic;
