//Хорошие решения
// const toWeirdCase = (str) => str.replace(/\b\w*\b/g, (w) => w.replace(/\w/g, (c, k) => c[k % 2 === 0 ? 'toUpperCase' : 'toLowerCase']()));

function toWeirdCase(string) {
  let indexChar = 0;
  let uppString = [];
  let newString = string.split('');
  newString.forEach((el) => {
    indexChar % 2 == 0 && el != ' ' ? uppString.push(el.toUpperCase()) : uppString.push(el);
    el != ' ' ? indexChar++ : (indexChar = 0);
  });
  return uppString.join('');
}

export default toWeirdCase;
