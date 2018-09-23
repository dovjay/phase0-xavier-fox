function squareNumber(num) {
  let i=1;
  var result = [];
  var arrayTmp = [];

  if (num < 3) {
    return 'Minimal input adalah 3';
  
  }
  while (i <= num * num) {
    for (let j=0; j<num; j++) {
      arrayTmp.push(i);
      i++;
    }
    result.push(arrayTmp);
    arrayTmp = [];
  }
  return result;
}

console.log(squareNumber(3));
// [ [ 1, 2, 3 ], [ 6, 5, 4 ], [ 7, 8, 9 ] ]

console.log(squareNumber(4));
// [ [ 1, 2, 3, 4 ],
//   [ 8, 7, 6, 5 ],
//   [ 9, 10, 11, 12 ],
//   [ 16, 15, 14, 13 ] ]

console.log(squareNumber(5));
// [ [ 1, 2, 3, 4, 5 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 21, 22, 23, 24, 25 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3