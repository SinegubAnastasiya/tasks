// Вычислить факториал числа используя рекурсию

let n = +prompt();

function test(n) {
    if (n ===  1) return 1;
    return n * test(n - 1);
}

let result = test(n);
console.log(result);