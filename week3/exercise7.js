var str = 'I have a dream';

function hitungJumlahKata(kalimat) {
  let jumlahKata = kalimat.split(' ');
  return jumlahKata.length;
}

console.log(hitungJumlahKata(str));