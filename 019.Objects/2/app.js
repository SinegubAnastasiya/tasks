const obj = {
    id: 'text',
    1: 'hello',
    2: 23,
    text: 'abc',
}

for (let key in obj) {
    if (!isNaN(key)) {
        console.log(key);
    }
}