function changeVocals(str) {
  var result = '';
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
        result += 'b';
        break;
      case 'e':
        result += 'f';
        break;
      case 'i':
        result += 'j';
        break;
      case 'o':
        result += 'p';
        break;
      case 'u':
        result += 'v';
        break;
      case 'A':
        result += 'B';
        break;
      case 'E':
        result += 'F';
        break;
      case 'I':
        result += 'J';
        break;
      case 'O':
        result += 'P';
        break;
      case 'U':
        result += 'V';
        break;
      default:
        result += str[i];
        break;
    }
  }
  return result;
}

function reverseWord(str) {
  return str.split('').reverse().join('');
}

function setLowerUpperCase(str) {
  var result = '';
  for(let i=0; i<str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      result += str[i].toUpperCase();
    } else if (str[i] !== str[i].toLowerCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

function removeSpaces(str) {
  var result = '';
  var arrWord = str.split(' ');
  for (let i=0; i<arrWord.length; i++) {
    result += arrWord[i];
  }
  return result;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  var change = changeVocals(name);
  var reverse = reverseWord(change);
  var setCase = setLowerUpperCase(reverse);
  return removeSpaces(setCase);
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'