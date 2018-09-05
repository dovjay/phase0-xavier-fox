function groupAnimals(animals) {
  animals.sort();
  var cekString = '';
  var searchLetter = animals[0][0];
  var arrOfAnimals = [];
  var result = [];
  for (let i=0; i<animals.length; i++) {
    cekString = animals[i][0];
    if (searchLetter === animals[i][0]) {
      arrOfAnimals.push(animals[i]);
    } else {
      result.push(arrOfAnimals);
      arrOfAnimals = [];
      arrOfAnimals.push(animals[i]);
      searchLetter = cekString;
    }
  }
  result.push(arrOfAnimals);
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]