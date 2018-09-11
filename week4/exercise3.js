function cariMedian(arr) {
  var median;
  var result;
  if (arr.length % 2 === 0) {
    median = arr.length / 2;
    result = (arr[median-1] + arr[median]) / 2;
  } else {
    median = Math.floor(arr.length / 2);
    result = arr[median];
  }

  return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5