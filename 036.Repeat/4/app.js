// На входе статичный объект. Написать функцию на формирование массива
// значений данного объекта

const obj = {
    id: 1,
    name: 'Nastya',
    age: 25,
    city: 'Minsk'
}

function doArr(obj) {
    return Object.values(obj)
}

const res = doArr(obj)
console.log(res);
