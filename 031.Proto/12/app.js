// Реализуйте функцию, которая будет считать количество своих вызовов

let count = 1;

function countCall() {
    return function () {
        return count++
    }
}

let res = countCall()
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());