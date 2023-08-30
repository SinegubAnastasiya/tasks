// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение)

const obj = {
    id: 2,
    age: 25,
    name: 'nastya',
    city: 'minsk',
    phone: 1123435,
}
count = 0;
 for (let key in obj) {
    count++;
 }
 console.log(count);