// Создайте функцию, которая принимает объект и строку (имя свойства) и
// возвращает true, если такое свойство существует в объекте, и false, если нет,
// используя Object.keys().

const obj = {
    id: 123,
    city: 'Minsk',
    age: 25
}
const param = 'city';

function checkObj(obj, param) {
    try {
        const val = Object.keys(obj);
        if (!val.includes(param)) return false
        else return true
    } catch (error) {
        return error.message
    }
}

const res = checkObj(obj, param)
console.log(res);