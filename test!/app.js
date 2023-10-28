let n = +prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}

function getArr(arr) {
    let res = arr.map((el) => '#' + el)
    return res
}

const res = getArr(arr)
console.log(res);