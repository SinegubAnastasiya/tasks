// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

const arr = [2, 5, 8, 'bhjb', 1];

function checkNumber(arr) {
    let res = arr.every(function(elem) {
        if (!isNaN(elem)) {
            return true;
        }
    })
    return res;
}

function getSum(arr) {
    const bool = checkNumber(arr);
    if (bool === true) {
        let sum = arr.reduce(function(sum,elem) {
            return sum + elem;
        }, 0)
        return sum;
    } else {
        return false;
    }
    
}
let summa = getSum(arr);
console.log(summa);