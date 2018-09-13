function cariModus(arr) {
  var Modus = new Object();
  var tmp = 0;
  var result = '';
  for (let i=0; i<arr.length; i++) {
    if (typeof Modus[arr[i]] == 'undefined') {
      Modus[arr[i]] = 1;
    } else {
      Modus[arr[i]]++;
    }
  }
  var arrModus = Object.keys(Modus)
  for (let i=0; i<arrModus.length; i++) {
    if (tmp < Modus[arrModus[i]]) {
      tmp = Modus[arrModus[i]];
      result = arrModus[i];
    }
  }
  if (tmp === 1) {
    return -1;
  }
  if (Object.keys(Modus).length > 1) {
    return result;
  } else {
    return -1;
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1