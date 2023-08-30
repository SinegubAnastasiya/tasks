// На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
    id: 3,
    name: 'Nastya',
    age: 25,
    status: 'worker',
}

for (let key in obj) {
    if (!isNaN(obj[key])) {
        console.log(obj[key]);
    }
}