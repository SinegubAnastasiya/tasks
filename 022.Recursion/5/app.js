// На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию

const n = 2, step = 5;

function getStep(n, step) {
    if (step === 1) return n;
    return n * getStep(n, step - 1);

}

const result = getStep(n, step);
console.log(result);