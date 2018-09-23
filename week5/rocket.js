function domino(num) {
  var leftRight = Math.ceil(num / 2);
  var center = Math.floor(leftRight / 2);
  var boundaries = '';
  var centerNum = Math.ceil(Math.random() * 6);
  for (let i=0; i<leftRight; i++) {
    for (let j=0; j<num; j++) {
      if (i == 0 || i == leftRight-1) {
        boundaries += '#';
      } else {
        if(j == 0 || j == num-1) {
          boundaries += '#';
        } else if (j == leftRight && i == center){
          boundaries += centerNum;
        } else {
          boundaries+= ' ';
        }
      }
    }
    console.log(boundaries);
    boundaries = '';
  }
}

domino(10);