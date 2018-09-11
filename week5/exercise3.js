function highestScore(students) {
  var Highest = new Object();
  var scoreFoxes = 0;
  var scoreWolves = 0;
  var scoreTigers = 0;
  for (let i = 0; i < students.length; i++) {
    switch (students[i].class) {
      case 'foxes':
        if (scoreFoxes < students[i].score) {
          Highest.foxes = { name: students[i].name, score: students[i].score };
          scoreFoxes = students[i].score;
        }
        break;
      case 'wolves':
        if (scoreWolves < students[i].score) {
          Highest.wolves = { name: students[i].name, score: students[i].score };
          scoreWolves = students[i].score;
        }
        break;
      case 'tigers':
        if (scoreTigers < students[i].score) {
          Highest.tigers = { name: students[i].name, score: students[i].score };
          scoreTigers = students[i].score;
        }
        break;
    }
  }
  return Highest;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}