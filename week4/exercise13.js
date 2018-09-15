function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  let Sepatu = {
    product: 'Sepatu Stacattu',
    shoppers: [],
    leftOver: listBarang[0][2],
    totalProfit: 0
  }
  let Baju = {
    product: 'Baju Zoro',
    shoppers: [],
    leftOver: listBarang[1][2],
    totalProfit: 0
  }
  let Sweater = {
    product: 'Sweater Uniklooh',
    shoppers: [],
    leftOver: listBarang[2][2],
    totalProfit: 0
  }

  let result = [];

  if (shoppers.length === 0) {
    return result;
  }

  for (let i=0; i<shoppers.length; i++) {
    switch(shoppers[i].product) {
      case 'Sepatu Stacattu':
        if (shoppers[i].amount <= listBarang[0][2]) {
          Sepatu.shoppers.push(shoppers[i].name);
          listBarang[0][2] -= shoppers[i].amount;
          Sepatu.leftOver = listBarang[0][2];
          Sepatu.totalProfit += shoppers[i].amount * listBarang[0][1];
        }
        break;
        case 'Baju Zoro':
        if (shoppers[i].amount <= listBarang[1][2]) {
          Baju.shoppers.push(shoppers[i].name);
          listBarang[1][2] -= shoppers[i].amount;
          Baju.leftOver = listBarang[1][2];
          Baju.totalProfit += shoppers[i].amount * listBarang[1][1];
        }
        break;
        case 'Sweater Uniklooh':
        if (shoppers[i].amount <= listBarang[2][2]) {
          Sweater.shoppers.push(shoppers[i].name);
          listBarang[2][2] -= shoppers[i].amount;
          Sweater.leftOver = listBarang[2][2];
          Sweater.totalProfit += shoppers[i].amount * listBarang[2][1];
        }
        break;
    }
  }

  result.push(Sepatu);
  result.push(Baju);
  result.push(Sweater);

  return result;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
