// ---Замыкание

function sumNumbers() {
    let sum = 0
    return function (a) {
        sum += a
        console.log(sum);
    }
}

const wrapper = sumNumbers()

wrapper(1)
wrapper(2)
wrapper(3)

// ------------------------


const arr = [1, 2, 3]
function sumNum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumNum(arr));

function sum() {
    let res = 0
    return function(arr) {
        for (let i = 0; i < arr.length; i++) {
            res += arr[i]
        }
        return res
    }
}

const wrap = sum()
console.log(wrap(arr));
console.log(wrap(arr));

