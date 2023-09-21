// // Реализуйте поиск максимального числа статичного массива используя рекурсию

const arr = [1, 5, 92, 123, 0, 538];
let max = 0;
let i = 0;

function findMax(arr) {
    if (arr.length === 1) return arr[0];
    if (arr[i] > max) {
       max = arr[i]
    } else {
        return findMax(arr.slice(i ,i + 1));
    }
}

let result = findMax(arr);
console.log(result);