//хорошие решения
//1
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

// function domainName(url){
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }

//TODO доделать относительно группирования именованных значнений
// function domainName(url) {
//   let reg = /(?<sheme>(?:http(?:s)?:\/\/))?(?<subdomen>(?:w{3}))/i;
//   return url.match(reg).groups;
// }

function domainName(url) {
  let match = '';
  if (url.indexOf('http') == 0 && url.indexOf('www') == -1) {
    match = url.match(/^(https?\:\/\/)([^:\/?#]*)/)[2];
  } else if (url.indexOf('http') == 0 && url.indexOf('www') != -1) {
    match = url.match(/^(https?\:\/\/)([^:\/?#]*)/)[2].slice(4);
  } else if (url.indexOf('www') == 0) {
    match = url.slice(url.indexOf('.') + 1);
  } else {
    match = url;
  }
  return match.slice(0, match.indexOf('.'));
}

module.exports = domainName;
