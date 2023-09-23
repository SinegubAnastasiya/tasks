// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

let num = '4895r';

function isValid(num) {
    if(isNaN(num)) throw new Error('Не число')
}

function getSqrt(num) {
    try {
        isValid(num)
        let res = num.split('').map(el => {
           return el ** 2;
        })
        return res.join('')
    } catch (error) {
        return error.message
    }
}

const res = getSqrt(num);
console.log(res);
