var kata = 'blanket';

function palindrom(kata) {
  let i = 0;
  let j = kata.length-1;
  while (i < kata.length) {
    if (kata[i] === kata[j]) {
      i++;
      j--;
    } else {
      return false;
    }
    return true;
  }
}

console.log(palindrom(kata));