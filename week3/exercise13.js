function targetTerdekat(arr) {
  var space = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] == 'o') {
      space = 0;
    } else if (arr[i] == 'x') {
      space++;
      return space;
    } else {
      space++;
    }
  }
  return 0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2