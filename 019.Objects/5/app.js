// На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.

const obj = {
    id: 2,
    1: 'fudibh',
    2: 'fbkbf',
    5: 'jkfbkej',
    8: 'fnjk',
    age: 25,
}

for (let key in obj) {
    if (key % 2 === 1) {
        console.log(key);
    }
}