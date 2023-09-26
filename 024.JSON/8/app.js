// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const str = ['a', 'b', 'c', 'd', 'f'];

function getMissingLetter(str) {
    try {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== alphabet[i]) throw new Error(`Missing the letter ${alphabet[i]}`)
        }
        return true
    } catch (error) {
        return error.message
    }
}

const res = getMissingLetter(str);
console.log(res);