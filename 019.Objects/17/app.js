// Найти значение массива, повторяющееся в нем наибольшее количество раз

let inputArr = [2, 3, 5, 2, 2, 10, 3, 2];
let obj = {}

for (const el of inputArr) {
    if (obj[el]) {
        obj[el] += 1;
    } else {
        obj[el] = 1;
    }
}

const values = [];

for (const key in obj) {
    values.push(obj[key]);
}

const max = Math.max(...values);

for (const key in obj) {
    if (obj[key] === max) {
        console.log(key);
    }
}






















// for (let i = 0; i < arr.length; i++) {
//     count = arr[i];
//     if (obj[count] != undefined) {
//         obj[count]++;
//     } else {
//         obj[count] = 1;
//     }
// }
// console.log(obj);