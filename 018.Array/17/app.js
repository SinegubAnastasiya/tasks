// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и второй
// массив, соответственно, с числами. forEach

const n = +prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

let nArr_1 = [];
let nArr_2 = [];

arr.forEach(function(elem) {
    if (isNaN(elem)) {
        nArr_1.push(elem);
    } else {
        nArr_2.push(elem);
    }
})
console.log(nArr_1, nArr_2);