function graduates(students) {
  var lulusan = new Object();
  const MIN_SCORE = 75;
  for (let i=0; i<students.length; i++) {
    switch(students[i].class) {
      case 'foxes':
        if (students[i].score > MIN_SCORE) {
          if (typeof lulusan.foxes === 'undefined') {
            lulusan.foxes = [];
          }
          lulusan.foxes.push({name: students[i].name, score: students[i].score});
        }
        break;
        case 'wolves':
        if (students[i].score > MIN_SCORE) {
          if (typeof lulusan.wolves === 'undefined') {
            lulusan.wolves = [];
          }
          lulusan.wolves.push({name: students[i].name, score: students[i].score});
        }
        break;
        case 'tigers':
        if (students[i].score > MIN_SCORE) {
          if (typeof lulusan.tigers === 'undefined') {
            lulusan.tigers = [];
          }
          lulusan.tigers.push({name: students[i].name, score: students[i].score});
        }
        break;
    }
  }
  return lulusan;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}