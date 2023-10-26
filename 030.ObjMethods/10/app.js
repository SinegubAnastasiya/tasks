// . У вас есть объект с информацией о пользователе. Извлеките имя и возраст
// пользователя с использованием деструктуризации.

const obj = {
    name: 'Nastya',
    age: 25,
    city: 'Minsk',
    country: 'Belarus'
}

const { name, age } = obj
console.log(name);
console.log(age);