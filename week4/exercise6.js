function hitungHuruf(kata) {
  var arrKata = kata.split(" ");
  var cekLetter = '';
  for (let i=0; i<arrKata.length; i++) {
    for (let j=0; j<arrKata[i].length; j++) {
      cekLetter = arrKata[i][j];
      for (let k=j+1; k<arrKata[i].length; k++) {
        if (cekLetter === arrKata[i][k]) {
          return arrKata[i];
        }
      }
    }
  }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau