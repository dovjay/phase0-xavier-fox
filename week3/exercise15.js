function groupAnimals(animals) {
  var arrGroup = [];
  var group = [];
  var cekLetter = '';
  var temp;
  var i = 0;
  var j = 0;

  while (i < animals.length) {
    cekLetter = animals[i][0];
    while (j < animals.length) {
      if (cekLetter === animals[j][0]) {
        group.push(animals[j]);
        animals.splice(j, 1);
        j = 0;
      } else {
        j++;
      }
    }
    if (group.length > 0) {
      arrGroup.push(group);
      group = [];
      i = 0;
      j = 0;
    } else {
      i++;
    }
  }

  for (let i = 0; i < arrGroup.length; i++) {
    for (let j = i + 1; j < arrGroup.length; j++) {
      if (arrGroup[i][0][0] > arrGroup[j][0][0]) {
        temp = arrGroup[i];
        arrGroup[i] = arrGroup[j];
        arrGroup[j] = temp;
      }
    }
  }
  return arrGroup;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]