let obj = {
    0: 7,
    1: 7, 
    2: 2,
    3: 4,
    4: 2,
    5: 6,
    6: 1,
    7: 4,
}

let arr = [];

for (let key in obj) {
    if (!arr.includes(obj[key])) {
        arr.push(obj[key]);
    }
}

let nObj = {}
arr.forEach(function(elem, index) {
    nObj[index] = elem;
})

console.log(nObj);