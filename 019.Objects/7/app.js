const obj = {
    id: 1,
}

let count = 0;

for (let key in obj) {
    if (key) {
        count++;
    }
}
console.log(count === 0 ? false : true);