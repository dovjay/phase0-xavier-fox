function kaliTerusRekursif(angka) {
  var arrAngka = String(angka).split('');
  var angkaPertama = Number(arrAngka[0]);
  result = 1;
  console.log(angkaPertama);
  if (String(angka).length == 1) {
    return angka;
  } else {
    arrAngka.shift();
    angka = arrAngka.join('');
    result = angkaPertama * kaliTerusRekursif(angka);
    if (String(result).length > 1) {
      console.log(result);
      result = kaliTerusRekursif(result);
    }
    return result;
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
// console.log(kaliTerusRekursif(3)); // 3
// console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
// console.log(kaliTerusRekursif(1231)); // 6