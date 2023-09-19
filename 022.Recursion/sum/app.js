let i = 10;

function test(i) {
    if (i === 0) return 0;
    return i + test(i - 1)
}

const result = test(i);
console.log(result);