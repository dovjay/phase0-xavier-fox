function searchPrime(num) {
  var result = [];
  var i = 2;
  while (i<=num) {
    if (num % i == 0) {
      result.push(i);
      num /= i;
      i = 2;
    }
    else {
      i++;
    }
  }
  return result;
}
function faktorPrima(num) {
  var result = [];
  var str = '';
  var pangkat = 1;
  result = searchPrime(num);
  var banding = result[0]
  for (let i=1; i<result.length; i++) {
    if (result[i] == banding) {
      pangkat++;
    } else {
      str += banding + ' pangkat ' + pangkat + ', ';
      pangkat = 1;
      banding = result[i];
    }
  }
  str += banding + ' pangkat ' + pangkat;
  return str;
}

console.log(faktorPrima(90)); // 2 pangkat 1, 3 pangkat 2, 5 pangkat 1
console.log(faktorPrima(168)); // 2 pangkat 3, 3 pangkat 1, 7 pangkat 1
console.log(faktorPrima(44)); // 2 pangkat 2, 11 pangkat 1
console.log(faktorPrima(55)); // 5 pangkat 1, 11 pangkat 1
console.log(faktorPrima(26)); // 2 pangkat 1, 13 pangkat 1
console.log(faktorPrima(17)); // 17 pangkat 1