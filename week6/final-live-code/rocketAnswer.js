function hourglass(num) {
  // your code here
  if (num < 3) {
    return 'Minimum parameter is 3';
  }

  var hour = '';
  var space = 0;
  var shape = num + num - 1;
  var shapeCurve = shape;

  for (let i=0; i<num; i++) {
    for (let j=0; j<shapeCurve; j++) {
      if (j < space) {
        hour += ' ';
      } else {
        hour += '#';
      }
    }
    shapeCurve--;
    space++;
    hour += '\n';
  }
  space -= 2;
  shapeCurve++;
  shape = shapeCurve--;
  for (let i=shapeCurve; i>0; i--) {
    for (let j=0; j<=shape; j++) {
      if (j < space) {
        hour += ' ';
      } else {
        hour += '#';
      }
    }
    shapeCurve--;
    shape++;
    space--;
    hour += '\n';
  }
  return hour;
}

console.log(hourglass(2)); //Minimum parameter is 3

console.log(hourglass(4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/

console.log(hourglass(5));
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/