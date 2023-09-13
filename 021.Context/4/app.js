// Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное значения в этом массиве. Добавьте проверки на ввод и выведите
// сообщение об ошибке, если значения массива не соответствуют условиям задачи.

const arr = [2, 54, 32, 97, 1];

function getMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

function getMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}

let result = getMin(arr);
let maximum = getMax(arr);
console.log(`min = ${result}, max = ${maximum}`);