function reverseAll (arr) {
  var reverseStr = '';
  var reverseArr = [];
  var k = 0;
  for (let i=arr.length-1; i>=0; i--) {
    for (let j=arr[i].length-1; j>=0; j--) {
      reverseStr += arr[i][j];
    }
    reverseArr[k] = reverseStr;
    k++;
    reverseStr = '';
  }

  return reverseArr;
}

console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []
