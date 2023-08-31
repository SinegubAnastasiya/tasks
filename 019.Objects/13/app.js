const obj = {}
let arr = [];
let n = 5;

for (let i = 0; i < n; i++) {
    arr.push(Math.round(Math.random() * 100));
}

for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
}
console.log(obj);
