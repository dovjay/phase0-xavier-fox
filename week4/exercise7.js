function digitPerkalianMinimum(angka) {
  var arrAngka = [];
  var strAngka = '';
  var result = String(angka).length + 1;
  for (let i=1; i<=angka; i++) {
    if (angka % i === 0) {
      arrAngka.push(i);
    }
  }
  if (arrAngka.length === 1) {
    return result;
  }
  for (let i=0; i<arrAngka.length; i++) {
    for (let j=i; j<arrAngka.length; j++) {
      if (arrAngka[i] * arrAngka[j] === angka) {
        strAngka = String(arrAngka[i]) + String(arrAngka[j]);
      }
    }
    if (strAngka.length < result) {
      result = strAngka.length;
    }
  }
  return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
