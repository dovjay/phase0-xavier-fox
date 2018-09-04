var name;
var age;
var money;

function makanSteak(name, age, money) {
  const STEAK = 300000;
  var bill = STEAK;
  var change = 0;
  if (name === '')
    return "Anda tidak boleh masuk!";
  if (age >= 55) {
    bill -= (STEAK * 0.3);
    change = money - bill;
  } else {
    change = money - bill;
  }
  if (money < bill) {
    return "Uang tidak cukup. Anda harus pulang";
  } else {
    return `Anda bisa pesan steak. Sisa uang anda: ${change}`;
  }
}

console.log(makanSteak('Mickey', 55, 300000));