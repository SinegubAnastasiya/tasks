// Напишите функцию countNumbers(arr), которая считает количество чисел в
// массиве arr. Используйте рекурсию.

const arr = [2, 6, 5, 96, 34, 67];

function countNumbers(arr) {
    if (arr.length === 0) return 0;
    return 1 + countNumbers(arr.slice(1));
}

const res = countNumbers(arr);
console.log(res);