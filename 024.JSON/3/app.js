// Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
// вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
// на числа. Далее вывести только те числа, которые кратны 3

const str = '[1, 2, 3, 4, 5]';

function parsingData(str) {
    try {
        const pars = JSON.parse(str);
        let res = pars.some(el => isNaN(el))
        if (res) throw new Error('Есть строка')
        return pars.filter(el => {
            if (el % 3 === 0) {
                return true
            }
        })
    } catch (error) {
        return error.message
    }
}

const res = parsingData(str);
console.log(res);
