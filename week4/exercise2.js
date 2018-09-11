function fpb(angka1, angka2) {
  var arrAngka1 = [];
  var arrAngka2 = [];
  var result = 1;
  for (let i=0; i<=angka1; i++) {
    if (angka1 % i === 0) {
      arrAngka1.push(i);
    }
  }
  for (let i=0; i<=angka2; i++) {
    if (angka2 % i === 0) {
      arrAngka2.push(i);
    }
  }
  if (angka1 > angka2) {
    for (let i=0; i<arrAngka1.length; i++) {
      for (let j=0; j<arrAngka2.length; j++) {
        if (arrAngka1[i] === arrAngka2[j]) {
          result = arrAngka1[i];
        }
      }
    }
  } else {
    for (let i=0; i<arrAngka2.length; i++) {
      for (let j=0; j<arrAngka1.length; j++) {
        if (arrAngka2[i] === arrAngka1[j]) {
          result = arrAngka2[i];
        }
      }
    }
  }

  return result;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1