function tukarBesarKecil(kalimat) {
  var arrOfStr = kalimat.split('');
  var i = arrOfStr.length-1;
  if (kalimat[i] == undefined) {
    return '';
  } else {
    if (kalimat[i] == kalimat[i].toLowerCase()) {
      arrOfStr.splice(i, 1);
      return tukarBesarKecil(arrOfStr.join('')) + kalimat[i].toUpperCase();
    } else if (kalimat[i] == kalimat[i].toUpperCase()) {
      arrOfStr.splice(i, 1);
      return tukarBesarKecil(arrOfStr.join('')) + kalimat[i].toLowerCase();
    }else {
      arrOfStr.splice(i, 1);
      return tukarBesarKecil(arrOfStr.join('')) + kalimat[i];
    }
  }
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"