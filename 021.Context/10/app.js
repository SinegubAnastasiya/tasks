// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

const obj = {
    id: 1, 
    city: 'Minsk',
    age: 25
}

const result = (function (obj) {
    let count = 0;
    for (let key in obj) {
        if (obj[key]) {
            count++
        }
    }
    return count
}(obj))

console.log(result);

