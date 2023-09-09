// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

const n = 3;

function checkArr(arr) {
    let res = arr.every(function(elem) {
        if (!isNaN(elem)) return true
        else return false
    })
    return res
}

function pushArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt());
    }
    return arr
}

let arr = pushArr(n)

function genNewArr(arr) {
    let check = checkArr(arr)
    if (check === true) {
        let res = arr.map((elem) => (elem % 2 === 0) ? elem * elem : elem)
        return res;
    } else {
        return 'ERROR'
    }
}

const res = genNewArr(arr)
console.log(res);