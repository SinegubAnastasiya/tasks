// На входе массив array. Посчитайте количество элементов массива используя
// рекурсию

const arr = [1, 6, 9, 3, 0, 3, 2];

function countLength(arr) {
    if (arr.length === 0) return 0;
    return 1 + countLength(arr.slice(1))
}

const result = countLength(arr);
console.log(result);