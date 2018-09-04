function balikString(str) {
  let balikStr = '';
  for (let i=str.length-1; i>=0; i--) {
    balikStr += str[i];
  }
  return balikStr;
}

console.log(balikString("Hello World!"));