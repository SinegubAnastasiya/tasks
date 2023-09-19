// Вычислить факториал числа используя рекурсию
let n = 5;

function test(n) {
    if (n ===  1) return 1;
    return n * test(n - 1);
}

let result = test(n);
console.log(result);