// Отобразите в строке через пробел числа от 0 до 10 по возрастанию используя
// рекурсию
let n = 10;
function test(n) {
    if (n === 0) return `${n}`;
    return `${n} ` + test(n - 1) ;
}

let result = test(n);
console.log(result);