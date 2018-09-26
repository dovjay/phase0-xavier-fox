function kaliTerusRekursif(angka) {
  var arrOfAngka = String(angka).split('');
  var hasilKali = 1;
  for (let i = 0; i < arrOfAngka.length; i++) 
    hasilKali *= arrOfAngka[i];
  if (String(hasilKali).length > 1)
    return kaliTerusRekursif(hasilKali);
  else
    return hasilKali;
}

// TEST CASES
console.log(kaliTerusRekursif(666)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6