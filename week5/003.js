function findOutlier(array) {
  var unique = {
    ganjil: [],
    genap: []
  }
  for (let i=0; i<array.length; i++) {
    if (array[i] % 2 !== 0) {
      unique.ganjil.push(array[i]);
    } else {
      unique.genap.push(array[i]);
    }
  }
  if (unique.ganjil.length === 1) {
    return unique.ganjil[0];
  } else if (unique.genap.length === 1) {
    return unique.genap[0];
  } else {
    return 'no number';
  }
}

console.log(findOutlier([2, 4, 6, 100, 4, 11, 8, 50])); // 11

console.log(findOutlier([160, 3, 1719, 19, 11, 13, 21])); // 160

console.log(findOutlier([])) // 'no number'
