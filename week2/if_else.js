var nama = 'dovan';
var peran;
if (nama === null || nama === undefined || nama === '') {
  console.log('Nama harus diisi!');
} else {
  if (peran === '' || peran === null || peran === undefined) {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
  } else {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    if (peran === 'Ksatria') {
      console.log('Halo', peran, nama + ', kamu dapat menyerang dengan senjatamu!');
    } else if (peran === 'Tabib') {
      console.log('Halo', peran, nama + ', kamu akan membantu temanmu yang terluka.');
    } else if (peran === 'Penyihir') {
      console.log('Halo', peran, nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
    }
  }
}