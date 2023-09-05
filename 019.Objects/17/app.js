// Найти значение массива, повторяющееся в нем наибольшее количество раз

let arr = [2, 3, 5, 2, 2, 10, 3, 2];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
        count++;
    }
}
console.log(count);