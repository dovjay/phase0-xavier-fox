//Buat sebuah fungsi dengan nama largestNumber dengan parameter numbers
//  buat variabel max dan isi dengan 0
//  buat perulangan sepanjang array numbers
//  cek bila nilai max kurang dari numbers index ke i
//    jika iya isi nilai max dengan numbers index ke i
//  setelah perulangan berhenti return nilai max

function largestNumber(numbers) {
  var max = 0;
  for (let i=0; i<numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
}

// TEST CASES
console.log(largestNumber([5, 2, 1, 4])); // 5
console.log(largestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(largestNumber([15, 32, 11, 14])); // 32
console.log(largestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(largestNumber([123, 321, 143, 313])); // 321
