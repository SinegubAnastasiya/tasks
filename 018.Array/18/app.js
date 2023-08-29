// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

const n = 4;
let arr = [];

for (let i = 0; i < n; i++) {
    let num = prompt();
    if (!isNaN(num)) {
        arr.push(num);
    }
}

//map
let res = arr.map(function(elem) {
    return elem ** 2;
})
console.log(res);

//forEach
let arr_2 = [];
arr.forEach(function(elem) {
    arr_2.push(elem ** 2);
})
console.log(arr_2);

//for
for (let i = 0; i < n; i++) {
    arr_2.push(arr[i]**2);
}

//while
let i = 0;
while (i < arr.length) {
    arr_2.push(arr[i]**2);
    i++;
}

//for..of
for (let elem of arr) {
    arr_2.push(elem ** 2);
}