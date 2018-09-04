function drawLadder(row) {
  var a = Math.ceil(row / 2);
  var b = Math.floor(row / 2);
  var str = '';
  var cek = 0;
  for (let i=0; i<a; i++) {
    for (let j=0; j<i+1; j++) {
      cek++;
      if (cek % 2 !== 0) {
        str += 'x';
      } else {
        str += 'o';
      }
    }
    console.log(str);
    str = '';
    cek = 0;
  }
  for (let i=b; i>=0; i--) {
    for (let j=i; j>0; j--) {
      cek++;
      if (cek % 2 !== 0) {
        str += 'x';
      } else {
        str += 'o';
      }
    }
    console.log(str);
    str = '';
    cek = 0;
  }
}

drawLadder(6);