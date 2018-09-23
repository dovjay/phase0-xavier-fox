function numberPrimeCruncher(num) {
  var arrOfPrime = [];
  var result = [];
  var average = 0;
  for (let i=2; i<=num; i++) {
    for (var j=2; j<=i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (j == i) {
      arrOfPrime.push(i);
    }
  }
  for (let k=0; k<arrOfPrime.length; k++) {
   average += arrOfPrime[k]; 
  }
  average /= arrOfPrime.length;
  for (let k=0; k<arrOfPrime.length; k++) {
    if (arrOfPrime[k] > average) {
      result.push(arrOfPrime[k]);
    }
  }
  return result;
}

console.log(numberPrimeCruncher(10)); // [ 5, 7 ]
console.log(numberPrimeCruncher(44)); // [ 23, 29, 31, 37, 41, 43 ]
console.log(numberPrimeCruncher(23)); // [ 13, 17, 19, 23 ]
console.log(numberPrimeCruncher(1)); // []
console.log(numberPrimeCruncher(0)); // []