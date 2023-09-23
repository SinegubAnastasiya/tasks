// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

const arr = [1, 5, 7, 10];

function getStr(arr) {
    try {
        let bool = arr.every(el => typeof(el) === 'number' ? true : false);
        if (!bool) throw new Error('Есть строка');
        return true
    } catch (error) {
        return error.message
    }
}

const res = getStr(arr);
console.log(res);