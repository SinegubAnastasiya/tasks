// Вычислите сумму массива чисел статичного массива используя рекурсию

const arr = [2, 5, 10, 4];

function getSum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + getSum(arr.slice(1))
}

const result = getSum(arr);
console.log(result);