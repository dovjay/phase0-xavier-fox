function shoppingTime(memberId, money) {
  var arrHargaBarang = [
    1500000,
    500000,
    250000,
    175000,
    50000
  ]
  var User = {
    memberId: '',
    money: 0,
    listPurchased: [],
    changeMoney: 0
  }

  if (memberId) {
    if (money < 50000) {
      return "Mohon maaf, uang tidak cukup";
    } else {
      User.memberId = memberId;
      User.money = money;
      for (let i = 0; i < arrHargaBarang.length; i++) {
        if (money - arrHargaBarang[i] >= 0) {
          switch (i) {
            case 0:
              User.listPurchased.push('Sepatu Stacattu');
              money -= arrHargaBarang[i];
              break;
            case 1:
              User.listPurchased.push('Baju Zoro');
              money -= arrHargaBarang[i];
              break;
            case 2:
              User.listPurchased.push('Baju H&N');
              money -= arrHargaBarang[i];
              break;
            case 3:
              User.listPurchased.push('Sweater Uniklooh');
              money -= arrHargaBarang[i];
              break;
            case 4:
              User.listPurchased.push('Casing Handphone');
              money -= arrHargaBarang[i];
              break;
          }
        }
      }
      User.changeMoney = money;

      return User;
    }
  }
  return "Mohon maaf, toko X hanya berlaku untuk member saja";
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja