// На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

const n = +prompt('n');
const len = +prompt('Введите длину массива');

function fillArray(len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(prompt());
    }
    return arr
}

let res = fillArray(len);
console.log(res);

function getNumber(res, n) {
    let nArr = res.filter(function(elem) {
        if (elem > n) {
            return true;
        }
    });
    return nArr;
}
let result = getNumber(res, n);
console.log(result);