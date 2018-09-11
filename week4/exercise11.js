function changeMe(arr) {
  var Person = {
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
  }
  if (arr !== []) {
    for (let i=0; i<arr.length; i++) {
      Person.age = 'Invalid Birth Year';
      for (let j=0; j<arr[i].length; j++) {
        switch(j) {
          case 0:
            Person.firstName = arr[i][j];
            break;
          case 1:
            Person.lastName = arr[i][j];
            break;
          case 2:
            Person.gender = arr[i][j];
            break;
          case 3:
            if (arr[i][j] < 2018) {
              Person.age = 2018 - arr[i][j];
            }
            break;
        }
      }
      console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}`);
      console.log(Person);
    }
  }
  return "";
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""