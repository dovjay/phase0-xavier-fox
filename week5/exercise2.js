function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  function Payment(penumpang, naikDari, tujuan, bayar) {
    this.penumpang = penumpang;
    this.naikDari = naikDari;
    this.tujuan = tujuan;
    this.bayar = bayar;
  }
  const TARIF = 2000;
  var jarak = 0;
  var bill = 0;
  var from = '';
  var to = '';
  var result = [];

  for (let i=0; i<arrPenumpang.length; i++) {
    from = arrPenumpang[i][1];
    to = arrPenumpang[i][2];
    for (let j=0; j<rute.length; j++) {
      if (from === rute[j]) {
        while (to !== rute[j]) {
          jarak++;
          j++;
        }
      }
    }
    bill = TARIF * jarak;
    result.push(new Payment(arrPenumpang[i][0], arrPenumpang[i][1], arrPenumpang[i][2], bill));
    jarak = 0;
    bill = 0;
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]