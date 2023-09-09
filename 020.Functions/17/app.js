// Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const str = 'hschool';

function isValidSTR(str) {
    if (typeof str !== 'string') return false
    if (!str) return false
    if (!isNaN(str)) return false

    return true
}

function changeSTR(str) {
    const bool = isValidSTR(str)

    if (bool === true) {

        const result = str.split('').reduce((sum, el, index) => {
            if (index % 2 === 0) {
                return sum + el.toUpperCase()
            } else {
                return sum + el.toLowerCase()
            }
        })

        return result;
    } else {
        return 'ERROR'
    }
}

const result = changeSTR(str)
console.log(result);