// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['world', 'hi', 'hey', 'hello'];

function checkArr(arr) {
    let res = arr.every(function(el) {
        if (isNaN(el)) return true
    })
    return res
}

function sumArr(arr) {
    const bool = checkArr(arr);
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (bool) res += arr[i];
    }
    return res
}

const res = sumArr(arr);
console.log(res);
