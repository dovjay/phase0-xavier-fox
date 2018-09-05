function cariModus(arr) {
  var tmp = arr[0];
  var arrMedian = [];
  arr.sort(function(value1, value2) { return value1 > value2});
  for (let i=1; i<arr.length; i++) {
    if (tmp === arr[i]) {
      arrMedian.push(arr[i]);
    } else {
      tmp = arr[i];
    }
  }
  tmp = arrMedian[0];
  if (arrMedian) {
    for(let i=1; i<=arrMedian.length; i++) {
    if (tmp !== arrMedian[i]) {
      return tmp;
    }
    return -1;
    }
  }
  return -1;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1