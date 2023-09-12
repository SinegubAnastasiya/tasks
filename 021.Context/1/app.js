// Напишите функцию, которая принимает строку из чисел ‘12345’ и возвращает
// значение в обратном порядке ‘54321’. IIFE

const str = '12345';

function isValid(str) {
    if (!isNaN(str)) {
        return true
    } else {
        return false
    }
}

let result = (function() {
    let res = isValid(str);
    if (res === true) {
        return str.split('').reverse().join('')
    } else {
        return 'ERROR'
    }
}())
console.log(result);