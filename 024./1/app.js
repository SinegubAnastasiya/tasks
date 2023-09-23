// На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

const num = prompt();

function isValid(num) {
    try {
        if (num % 2 !== 0) throw new Error('Это нечетное число')
        if (isNaN(num)) throw new Error('Это не число')
        else return true
    } catch (error) {
        return error.message
    }
}

const result = isValid(num);
console.log(result);
