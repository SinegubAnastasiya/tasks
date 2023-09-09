// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str1 = 'липа';
const str2 = 'пила';

function isValidStr(str1, str2) {
    if (!isNaN(str1)) return false
    if (!isNaN(str2)) return false
    return true
}

function checkSTR(str1, str2) {
    let res = isValidStr(str1, str2)
    if (res === true) {
        return str1.split('').sort().join('') === str2.split('').sort().join('') ? true : false;
    } else {
        return 'ERROR'
    }
}

let result = checkSTR(str1, str2)
console.log(result);