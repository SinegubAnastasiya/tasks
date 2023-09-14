// Напишите функцию, которая принимает два параметра: предложение из
// нескольких слов и букву. Функция должна подсчитывать количество вхождений
// указанной буквы в строке. Добавить проверки

const str = 'hello, dolly';
const letter = 'l';

function isValid(str, letter) {
    if (isNaN(str) && isNaN(letter)) return true
}

function countLetters(str, letter) {
    let count = 0;
    const check = isValid(str,letter);
    if (check === true) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === letter) {
                count++
            }
        }
        return count;
    } else return 'ERROR'
   
}

let result = countLetters(str, letter);
console.log(result);

