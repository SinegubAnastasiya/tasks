// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// же результат – число с плавающей точкой, то округлить до 2 знаков после запятой).

let number = +prompt('Введите число');
let b = Math.sqrt(number);

if (Number.isInteger(b)) {
    console.log (b);
} else {
    console.log (b.toFixed(2));
}