// Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя
// рекурсию

let i = 5;

function getNumbers(i) {
    if (i === 0) return i
    if (i % 2 === 0) {
        return `${i} ` + getNumbers(i - 1);
    } else {
        return getNumbers(i - 1);
    }
}

const result = getNumbers(i);
console.log(result);