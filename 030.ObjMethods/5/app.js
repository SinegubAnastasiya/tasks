// Создайте функцию, которая принимает объект и возвращает массив всех его
// значений, используя Object.values().

const obj = {
    id: 123,
    city: 'Minsk',
    age: 25
}

function getArr(obj) {
    try {
        const res = Object.values(obj)
        return res
    } catch (error) {
        return error.message
    }
}

const res = getArr(obj);
console.log(res);