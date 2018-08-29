// 1. While Loop
var i = 2;
console.log('LOOPING PERTAMA');
while (i <= 20) {
  console.log(i, '- I love coding');
  i += 2;
}
i = 20;
console.log('LOOPING KEDUA');
while(i > 0) {
  console.log(i, '- I will become fullstack developer');
  i -= 2;
}

// 2. For Loop
console.log('LOOPING PERTAMA');
for (let i=1; i<21; i++) {
  console.log(i, '- I love coding');
}
console.log('LOOPING KEDUA');
for (let i=20; i>0; i--) {
  console.log(i, '- I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap
for (let i=1; i<101; i++) {
  if (i % 2 === 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}
for (let i=1; i<101; i+=2) {
  if (i % 3 === 0) {
    console.log(i, 'KELIPATAN 3');
  }
}
for (let i=1; i<101; i+=5) {
  if (i % 6 === 0) {
    console.log(i, 'KELIPATAN 6');
  }
}
for (let i=1; i<101; i+=9) {
  if (i % 10 === 0) {
    console.log(i, 'KELIPATAN 10');
  }
}