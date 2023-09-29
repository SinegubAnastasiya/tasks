// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const str = 'mnoqr';
const index = alphabet.indexOf(str[0])
const sliceAlph = alphabet.slice(index);

function getMissingLetter(str) {
    try {
        for (let i = 0; i < sliceAlph.length; i++) {
            if (sliceAlph[i] != str[i]) {
                console.log('Missing letter', sliceAlph[i]);
                break
            }
        }
        return true
    } catch (error) {
        return error.message
    }
}

const res = getMissingLetter(str);
console.log(res);