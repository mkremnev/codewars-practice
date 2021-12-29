function isPangram(string) {
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let arr_string = string
    .replace(/(\s|\.)+/g, '')
    .toLowerCase()
    .split('');
  return arr_en.filter((e) => {
    return !arr_string.includes(e);
  }).length
    ? false
    : true;
}

export default isPangram;
