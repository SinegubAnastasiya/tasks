// Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”. 

const date = 'xx/xx/xxxx';

function checkDate(date) {
    if (!date.includes('/')) return false
    return true
}

function changeDate(date) {
    let check = checkDate(date)
    if (check === true) {
        return date.replaceAll('/','-').split('').reverse().join('');
    } else {
        return 'ERROR'
    }
}

const res = changeDate(date)
console.log(res);