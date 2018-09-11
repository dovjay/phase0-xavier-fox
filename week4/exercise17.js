
function  totalDigitRekursif(angka) {
  var arrAngka = String(angka).split('');
  var result = 0;
  if (angka == 0) {
    return 0;
  } else {
    result = Number(arrAngka[0]);
    arrAngka.shift();
    angka = Number(arrAngka.join(''));
    return result + totalDigitRekursif(angka);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5