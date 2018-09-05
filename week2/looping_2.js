var str = '';
// 1. Menyusun Barisan Bintang
var rows1 = 5;
for(let i = 0; i < rows1; i++) {
  console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
for(let i = 0; i < rows2; i++) {
  for(var j = 0; j < rows2; j++) {
    str += '*';
  }
  console.log(str);
  str = '';
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
for(let i = 1; i <= rows3; i++) {
  for(let j = 0; j < i; j++) {
    str += '*';
  }
  console.log(str);
  str = '';
}