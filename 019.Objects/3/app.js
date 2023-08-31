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