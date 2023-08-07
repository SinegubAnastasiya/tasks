// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//     же результат – число с плавающей точкой, то округлить то целых)

let number = +prompt('Введите число: ');
let b = Math.sqrt(number);

if (Number.isInteger(b)) {
    console.log (b);
} else {
    console.log (Math.floor(b));
}