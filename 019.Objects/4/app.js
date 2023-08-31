const obj = {
    id: 4,
    name: 'nastya',
    age: 25,
    family: 20,
    1: 1,
    2: 10,
}

for (let key in obj) {
    if (obj[key] % 2 === 0) {
        console.log(obj[key]);
    }
}