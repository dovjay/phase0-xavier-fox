//ALGORITMA
//buat sebuah fungsi tambahDash() dengan parameter str
//  lalu buat var arrOfStr dengan nilai str.split('')
//  buat var result dengan nilai array kosong
//  lalu buat perulangan for dari index ke 0 sampai kurang dari arrOfStr.length dengan pertambahan 1
//  cek jika arrOfStr[i] ganjil dan arrOfStr[i+1] ganjil pula maka
//    push arrOfStr[i] ke result
//    dan push karakter '-' ke result
//  jika tidak maka
//    push arrOfStr[i] ke result
//  terakhir return hasil result.join('')
//  SELESAI panggil fungsi

function tambahDash(str) {
  //your code here
  var arrOfStr = str.split('');
  var result = [];
  for (let i=0; i<arrOfStr.length; i++) {
    if (arrOfStr[i] % 2 == 1 && arrOfStr[i+1] % 2 == 1) {
      result.push(arrOfStr[i]);
      result.push('-');
    } else {
      result.push(arrOfStr[i]);
    }
  }
  return result.join('');
}

console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'