// Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива

let arr = [1, 2, 3, 4];
let res = 1;

for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
}
console.log(res);