// Создайте функцию, которая принимает объект и имя свойства. Используйте
// hasOwnProperty, чтобы проверить, существует ли данное свойство в объекте, и
// вернуть соответствующее сообщение.

const obj = {
    id: 123,
    city: 'Minsk',
    age: 25
}

const val = 'age';

function checkObj(obj) {
    try {
        
    } catch (error) {
        return error.message
    }
}