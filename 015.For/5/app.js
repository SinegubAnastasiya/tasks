// Найдите максимальное значение в статичном массиве используя цикл. 

let arr = [2, 18, 34, 56, 3, 1];
let res = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > res) {
        res = arr[i];
    }
}

console.log(res);