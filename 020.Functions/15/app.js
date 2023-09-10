// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

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

let arr = pushArr(n);

function multiplyArr(arr) {
    let check = checkArr(arr)
    if (check === true) {
        let res = arr.reduce((proizv, elem) => proizv * elem,1)
        return res;
    } else {
        return 'ERROR'
    }
}

let mult = multiplyArr(arr)
console.log(mult);

