function trainSeating (penumpang) {
  var classObj = {
    VVIP: [],
    VIP: [],
    Regular: []
  }
  function Person(nama, seat) {
    this.nama = nama;
    this.seat = seat;
  }
  for (let i=0; i<penumpang.length; i++) {
    switch(penumpang[i].gerbong) {
      case 'VVIP':
        var penumpangObj = new Person(penumpang[i].nama, penumpang[i].seat);
        classObj.VVIP.push(penumpangObj);
        break;
        case 'VIP':
        var penumpangObj = new Person(penumpang[i].nama, penumpang[i].seat);
        classObj.VIP.push(penumpangObj);
        break;
        case 'Regular':
        var penumpangObj = new Person(penumpang[i].nama, penumpang[i].seat);
        classObj.Regular.push(penumpangObj);
        break;
    }
  }
  return classObj;
}


console.log(trainSeating([
  { nama: "Awtian", gerbong: "VVIP", seat: 'A1' },
  { nama: "Klonoa", gerbong: "VIP", seat: 'V1' },
  { nama: "Azizy", gerbong: "VVIP", seat: 'A2' },
  { nama: "Crash", gerbong: "Regular", seat: 'R1' },
  { nama: "Sena", gerbong: "Regular", seat: 'R3' },
  { nama: "Retsu", gerbong: "VIP", seat: 'V2' },
  { nama: "Hiruma", gerbong: "VVIP", seat: 'A666' },
  { nama: "Tsubasa", gerbong: "VIP", seat: 'V6' }
]));
/*
Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' } ]
}
*/
