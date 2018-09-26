function oddPairFirstLast(num) {
  // your code here
  var arrOfNum = String(num).split('');

  if (arrOfNum.length > 1) {
    var angka = Number(arrOfNum[0] + arrOfNum[arrOfNum.length-1]);
    
    arrOfNum.splice(0, 1);
    arrOfNum.splice(arrOfNum.length-1, 1);

    if (arrOfNum.length > 0) {
      num = Number(arrOfNum.join(''));
    } else {
      num = 0;
    }

    if (angka % 2 != 0) {
      return angka + oddPairFirstLast(num);
    } else {
      return 0 + oddPairFirstLast(num);
    }
  } else if (arrOfNum.length == 1 && num != 0) {
    var angka = Number(arrOfNum[0] + '1');
    return angka;
  } else {
    return 0;
  }
}

console.log(oddPairFirstLast(2345))// 25
console.log(oddPairFirstLast(2335)) // 58
console.log(oddPairFirstLast(23351)) // 87
console.log(oddPairFirstLast(42548)); //51