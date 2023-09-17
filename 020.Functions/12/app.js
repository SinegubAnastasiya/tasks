// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае

const str = 'шалаш';

function isValidSTR(str) {
    return isNaN(str) ? true : false
}

function checkStr(str) {
    let res = isValidSTR(str)
    if (res === true) {
        return str === str.split('').reverse().join('') ? true : false;
    } else {
        return 'ERROR'
    }
}

const result = checkStr(str);
console.log(result);