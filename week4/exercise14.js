function sorting(arrNumber) {
  arrNumber.sort(function(value1, value2) { return value1 > value2});
  return arrNumber;
}

function getTotal(arrNumber) {
  var result = 1;
  var compare = arrNumber[0];
  var stringResult = '';

  if (arrNumber.length === 0) {
    return stringResult;
  }

  for (let i=1; i<arrNumber.length; i++) {
    if (compare === arrNumber[i]) {
      result++;
    } else {
      compare = arrNumber[i];
      result = 1;
    }
  }
  stringResult = `angka paling besar adalah ${compare} dan jumlah kemunculan sebanyak ${result} kali`;

  return stringResult;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''