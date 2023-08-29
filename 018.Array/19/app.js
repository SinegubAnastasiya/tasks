// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 

const n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    let num = prompt();
    if (!isNaN(num)) {
        arr.push(+num);
    }
}

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         break;
//     } else {
//         sum += arr[i];
//     }
// }

let isZero = false;
let res = arr.reduce(function(sum, elem) {
        if (elem === 0 || isZero == true) {
            isZero = true;
            return sum + 0;
        } else {
            return sum + elem;
        }
}, 0)

console.log(res);