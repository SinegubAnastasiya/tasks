// Вычислить сумму последовательности целых чисел до первого встреченного
// нуля. Гарантируется наличие хотя бы одного нуля в последовательности.
// Дополнительное условие - убедиться, что все элементы последовательности
// являются числами.
// [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

const arr = [5, 1, 2, 3, 0, 1, 5, 0, 2];

function isValid(arr) {
    let res = arr.every(el => !isNaN(el) ? true : false);
    if (!res) throw new Error('В последовательности присутствуют не только числа')
    return res
}

function getSum(arr) {
    try {
        isValid(arr);
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) sum += arr[i];
            else return sum
        }
    } catch (error) {
        return error.message;
    }
}

const res = getSum(arr);
console.log(res);