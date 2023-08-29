// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = +prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    let a = prompt();
    if (!isNaN(a)) {
        arr.push(a);
    }
}
//filter
// let res = arr.filter(function(elem) {
//     if (elem > 0) {
//         return elem;
//     }
// })
// console.log(res);

//forEach
// let res = [];
// arr.forEach(function(elem) {
//     if (elem > 0) {
//         res += elem;
//     }
// })
// console.log(res);

//while
// let i = 0;
// let arr2 = [];
// while (i < arr.length) {
//     if (arr[i] > 0) {
//         arr2.push(arr[i]);
//     }
//     i++;
// }
// console.log(arr2);
let arr2 = [];
for (let i of arr) {
    if (i > 0) {
        arr2.push(i);
    }
}
console.log(arr2);



