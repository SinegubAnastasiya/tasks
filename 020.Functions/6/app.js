// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива

const n = 3;
let arr = [];

function formArr(n) {
    for (let i = 0; i < n; i++) {
        arr.push(prompt());
    }
    return arr;
}

let res = formArr(n);
console.log(res);

function countElem(res) {
    return res.length;
}

let length = countElem(res);
console.log(length);