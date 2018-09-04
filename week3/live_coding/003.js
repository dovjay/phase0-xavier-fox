var max = 4;
var str = '';
for (let i=max; i>0; i--) {
  if (i % 2 !== 0) {
    str = str + String(i);
  }
}
for (let i=0; i<max; i++) {
  console.log(str); //31
}