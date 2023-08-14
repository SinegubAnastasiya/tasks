// На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

let str = 'Swap Case'.split('');
let result = '';

for (i = 0; i < str.length; i++) {
    // if (str[i] === str[i].toUpperCase()) {
    //     result += str[i].toLowerCase();
    // } else {
    //     result += str[i].toUpperCase();
    // }
    str[i] === str[i].toUpperCase() ? result += str[i].toLowerCase() : result += str[i].toUpperCase();
}

console.log(result);