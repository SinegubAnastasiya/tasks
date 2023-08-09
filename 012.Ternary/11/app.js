// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1

let a = prompt();

if (isNaN(a)) {
    console.log('Error');
} else {
    console.log(Math.floor(a / 100));
}

isNaN(a) ? console.log('Error') : console.log(Math.floor(a / 100));