var angka = 641573;

function pasanganTerbesar(num) {
  let i = 0;
  let j = i + 2;
  let banding1 = String(num);
  let banding2 = 0;
  let banding3 = 0;
  while (j<=banding1.length) {
    banding2 = Number(banding1.slice(i, j));
    if (banding3 < banding2)
      banding3 = banding2;
    i++;
    j++;
  }
  return banding3;
}

console.log(pasanganTerbesar(angka));