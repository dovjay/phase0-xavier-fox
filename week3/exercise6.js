var angka = 10;

function angkaPalindrom(num) {
  let str = String(num);
  let i = 0;
  let j = str.length-1;
  while (i < str.length) {
    if (num < 9) {
      return num + 1;
    } else if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      num+=1;
      i = 0;
      j = str.length-1;
      str = String(num);
    }
  }
  return num;
}

console.log(angkaPalindrom(angka));
