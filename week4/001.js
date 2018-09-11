//buat sebuah fungsi absoluteWinner dengan parameter winners yang berisi array
//  didalam fungsi buat variabel bakugo, midoriya, dan todoroki dengan nilai 0
//  buat perulangan dengan panjang array winners
//    cek bila index winner sama dengan
//      'Bakugo' maka bakugo++
//      'Midoriya' maka midoriya++
//      'Todoroki' maka todoroki++
//  lalu cek lagi apakah nilai bakugo lebih besar dari midoriya dan todoroki
//    jika iya return "Bakugo won the tournament!"
//  jika tidak cek nilai midoriya apakah lebih besar dari todoroki dan bakugo
//    jika iya return "Midoriya won the tournament!"
//  jika tidak cek nilai todoroki apakah lebih besar dari bakugo dan midoriya
//    jika iya return "Todoroki won the tournament!"
//  jika tidak ada kondisi yang terpenuhi maka
//    return "There are no clear winner!"
function absoluteWinner(winners) {
  var bakugo = 0;
  var midoriya = 0;
  var todoroki = 0;

  for (let i = 0; i < winners.length; i++) {
    switch (winners[i]) {
      case 'Bakugo':
        bakugo++;
        break;
      case 'Midoriya':
        midoriya++;
        break;
      case 'Todoroki':
        todoroki++;
        break;
    }
  }
  if (bakugo > midoriya && bakugo > todoroki) {
    return "Bakugo won the tournament!";
  } else if (midoriya > bakugo && midoriya > todoroki) {
    return "Midoriya won the tournament!";
  } else if (todoroki > bakugo && todoroki > midoriya) {
    return "Todoroki won the tournament!";
  } else {
    return "There are no clear winner!"
  }
}

console.log(absoluteWinner(['Bakugo', 'Bakugo', 'Midoriya'])); // "Bakugo won the tournament!"
console.log(absoluteWinner(['Todoroki', 'Bakugo', 'Midoriya', 'Todoroki'])); // "Todoroki won the tournament!"
console.log(absoluteWinner(['Midoriya', 'Midoriya', 'Midoriya'])); // "Midoriya won the tournament!"
console.log(absoluteWinner(['Bakugo'])); // "Bakugo won the tournament!"
console.log(absoluteWinner([])); // "There are no clear winner!"
