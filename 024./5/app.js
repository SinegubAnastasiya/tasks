// На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const n = 5;

function getArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt());
    }
    return arr;
}

function isValid(arr) {
    if (!Array.isArray(arr)) throw new Error('Не массив')
    const res = arr.every(el => isNaN(el) ? false : true
 )
    if (!res) throw new Error('Не число')
    return res
}

function getNewArray(arr) {
    try {
        isValid(arr)
        const res = arr.filter(el => {
            if (el > 10 && el < 100) return true
        })
        return res
    } catch (error) {
        return error.message
    }
}

const arr = getArr(n);
const res = getNewArray(arr);
console.log(res);