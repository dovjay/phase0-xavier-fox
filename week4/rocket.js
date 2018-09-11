function initialGroupingDescending(studentsArr) {
  var arrGroup = [];
  var group = [];
  var cekLetter = '';
  var temp;
  var i = 0;
  var j = 0;

  while (i < studentsArr.length) {
    cekLetter = studentsArr[i][0];
    while (j < studentsArr.length) {
      if (cekLetter === studentsArr[j][0]) {
        group.push(studentsArr[j]);
        studentsArr.splice(j, 1);
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
    if (arrGroup[i][0].length > 1) {
      arrGroup[i].unshift(arrGroup[i][0][0]);
    }
  }

  for (let i = 0; i < arrGroup.length; i++) {
    for (let j = i + 1; j < arrGroup.length; j++) {
      if (arrGroup[i][0][0] < arrGroup[j][0][0]) {
        temp = arrGroup[i];
        arrGroup[i] = arrGroup[j];
        arrGroup[j] = temp;
      }
    }
  }
  return arrGroup;
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
