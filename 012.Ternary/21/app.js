// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста 

let str = prompt();

typeof str === 'string' ? console.log(str.split('')) : console.log('Error. Input string');

