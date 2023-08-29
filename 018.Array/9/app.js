

let n = +prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

//1 - forEach
let sum = 0;
arr.forEach(function(elem) {
    if (!isNaN(elem)) {
        sum += elem;
    } else {
        console.log('Ввели не числа');
    }
})
console.log(sum);

//2 - reduce
let res = arr.reduce(function(sum, elem) {
    return sum + elem;
})
console.log(res);