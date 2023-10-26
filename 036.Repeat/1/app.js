const n = 4;

function doArr(n) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(prompt())
    }
    return arr
}

function filterArrs(n) {
    const arrs = doArr(n)
    let res = arrs.filter((el) => el[0] == 'a' || el[0] == 'h')
    return res
}

const res = filterArrs(n)
console.log(res);