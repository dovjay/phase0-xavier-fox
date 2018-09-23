// ALGORITMA
// buat sebuah fungsi 'encrypt' yang mempunyai parameter 'input'
// lalu buat sebuah variabel 'result' bernilai string kosong
// setelahnya, buat perulangan dari 0 sampai panjang 'input'
// cek nilai dari 'input[index]' menggunakan switch-case
// bila 'input[index]' berupa huruf maka ubah menjadi simbol dan masukkan ke 'result'
// bila tidak, masukkan ke 'result' seperti dalam 'input[index]'
// terakhir, return 'result'

function encrypt(input) {
    var result = '';
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'a':
                result += '!';
                break;
            case 'b':
                result += '@';
                break;
            case 'c':
                result += '#';
                break;
            case 'd':
                result += '$';
                break;
            case 'e':
                result += '%';
                break;
            case 'f':
                result += '^';
                break;
            case 'g':
                result += '&';
                break;
            case 'h':
                result += '*';
                break;
            case 'i':
                result += '(';
                break;
            case 'j':
                result += ')';
                break;
            case 'k':
                result += '-';
                break;
            case 'l':
                result += '+';
                break;
            case 'm':
                result += '1';
                break;
            case 'n':
                result += '2';
                break;
            case 'o':
                result += '3';
                break;
            case 'p':
                result += '4';
                break;
            case 'q':
                result += '5';
                break;
            case 'r':
                result += '6';
                break;
            case 's':
                result += '7';
                break;
            case 't':
                result += '8';
                break;
            case 'u':
                result += '9';
                break;
            case 'v':
                result += '0';
                break;
            case 'w':
                result += '[';
                break;
            case 'x':
                result += ']';
                break;
            case 'y':
                result += '{';
                break;
            case 'z':
                result += '}';
                break;
            default:
                result += input[i];
                break;
        }
    }
    return result;
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2