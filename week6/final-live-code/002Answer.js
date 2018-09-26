//ALGORITMA
//buat sebuah fungsi cariIndex() dengan parameter numbers, numSearch, dan yangKe
//  lalu buat var found dengan nilai found dan position
//  kemudian buat perulangan dari 0 sampai numbers.length
//    cek jika numbers[i] == numSearch
//      maka found++ dan position = i
//    dan jika yangKe == found
//      maka return position
//  terakhir return -1 karena permintaan tidak ada yang ditemukan
//SELESAI panggil fungsi cariIndex()

function cariIndex(numbers, numSearch, yangKe) {
  // your code here
  var found = 0;
  var position;
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] == numSearch) {
      found++;
      position = i;
    }
    if (yangKe == found) {
      return position;
    }
  }
  return -1;
}

console.log(cariIndex([ 4, 5, 1, 2, 4, 5, 6, 4, 4 ], 4, 3)); // 7
console.log(cariIndex([ 2, 1, 1, 5, 6, 4 ], 5, 1)); // 3
console.log(cariIndex([ 2, 1, 1, 5 ], 2, 3)); // -1
console.log(cariIndex([], 3, 4)); //-1