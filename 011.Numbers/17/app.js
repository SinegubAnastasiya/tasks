// Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится без
// остатка на b. Если это так - выведите 'Делится' и результат деления, иначе
// выведите 'Делится с остатком' и остаток от деления

let a = +prompt('Введите a: ');
let b = +prompt('Введите b: ');

if (a % b === 0) {
    console.log ('Делится: ', a / b);
} else {
    console.log ('Делится с остатком: ', a % b);
}