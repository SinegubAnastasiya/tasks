// Найдите минимальное значение в массиве используя цикл
let arr = [56, 34, 99, 55, 1 , 73, 89, 120, 5];
let res = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < res) {
        res = arr[i];
    }
}
console.log(res);