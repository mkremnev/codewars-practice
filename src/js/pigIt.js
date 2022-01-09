/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 *
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 *
 *
 * Best practices
 * function pigIt(str){
 *   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
 * }
 *
 * @param word
 * @return {`${*}${string}ay`}
 */

const replacer = (word) => word.replace(/(^[A-Za-z])([a-z]{0,})/gi, '$2$1ay');

const pigIt = (str) => {
  return str
    .split(' ')
    .map((word) => replacer(word))
    .join(' '); // ?
};

export { pigIt };
