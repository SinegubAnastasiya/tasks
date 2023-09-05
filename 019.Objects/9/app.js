// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество 

const obj = {
    id: 1,
    name: 'nastya',
    age: 25,
    city: 'minsk',
    phone: 375291865935,
}

let count = 0;

for (let key in obj) {
    if (!isNaN(obj[key])) {
        count++;
    }
}
console.log(count);