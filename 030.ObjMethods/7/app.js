// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str используя Object.values ()

const obj = {
    id: 123,
    city: 'Minsk',
    age: 25
}
const str = 'Minsk'

function findStr(obj, str) {
    try {
        const val = Object.values(obj);
        if (!val.includes(str)) throw new Error('Do not include')
        return true
    }
    catch (error) {
        return error.message
    }
}

const res = findStr(obj, str);
console.log(res);