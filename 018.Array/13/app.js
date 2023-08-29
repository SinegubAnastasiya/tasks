// На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = +prompt();
let arr = [];
const a = 'javascript';

for (let i = 0; i < n; i++) {
    let str = prompt();
    if (isNaN(str)) {
        arr.push(str);
    }
}

let res = arr.filter(function(elem) {
    return elem.includes(a);
})
console.log(res);



