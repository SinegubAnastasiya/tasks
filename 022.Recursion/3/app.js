// На входе число n = 5. Вычислите сумму натуральных чисел от 1 до n используя
// рекурсию

let n = 5;

function getSum(n) {
    if (n === 1) return 1;
    return n + getSum(n - 1);
}

const result = getSum(n);
console.log(result);