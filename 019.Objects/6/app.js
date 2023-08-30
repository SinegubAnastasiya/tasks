// На входе статичный объект. Необходимо числовые значения удвоить на выходе.

const obj = {
    id: 1,
    age: 25,
    name: 'nastya',
    city: 'minsk',
    1: 12,
}

for (let key in obj) {
    if (!isNaN(obj[key])) {
        console.log(obj[key] * 2);
    }
}