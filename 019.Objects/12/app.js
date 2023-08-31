const obj = {}
let n = +prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

let res = arr.reduce(function(sum,elem) {
    return sum + elem;
}, 0)

obj.sum = res;
console.log(obj);
