// Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его

let a = +prompt();
let b = +prompt();

if (isNaN(a) || isNaN(b)) {
    console.log('Error. Input numbers');
} else {
    if ((a > 0 && a < 10) && (b >= 0 && b < 10)) {
        console.log(`I’m ${a}${b}`);
    } else if (a === 0) {
        console.log(`I’m ${b}`);
    } else {
        console.log('Error');
    }
}