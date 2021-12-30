function isPangram(string) {
  const arrEn = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const arrString = string
    .replace(/(\s|\.)+/g, '')
    .toLowerCase()
    .split('');
  return !arrEn.filter((e) => {
    return !arrString.includes(e);
  }).length;
}

export default isPangram;
