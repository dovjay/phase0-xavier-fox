function groupAnimals(animals) {
  animals.sort();
  var str = '';
  var str2 = animals[0][0];
  var arr = [];
  var arr2 = [];
  for (let i=0; i<animals.length; i++) {
    str = animals[i][0];
    if (str2 === animals[i][0]) {
      arr.push(animals[i]);
    } else {
      arr2.push(arr);
      arr = [];
      arr.push(animals[i]);
      str2 = str;
    }
  }
  arr2.push(arr);
  return arr2;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]