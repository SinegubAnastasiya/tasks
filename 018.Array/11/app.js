

let n = +prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

//1 - forEach
let res = 1;
arr.forEach(function(elem) {
    if (!isNaN(elem)) {
        res *= elem;
    } else {
        console.log('Ввели не числа');
    }
})
console.log(res);

//2 - reduce
let result = arr.reduce(function(proizv, elem) {
    return proizv * elem;
})
console.log(result);
