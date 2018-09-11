function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  let Order {
    product: '',
    shoppers: [],
    leftOver: 0,
    totalProfit: 0
  }

  for (let i=0; i<shoppers.length; i++) {
    Order.shoppers.push(shoppers[i].name);
    switch(shoppers[i].product) {
      case 'Sepatu Stacattu':
        Order.product = 'Sepatu Stacattu';
        if (shoppers[i].amount <= listBarang[0][2]) {
          listBarang[0][2] -= shoppers[i].amount;
          
        }
    }
  }
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