// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

let str = prompt();
str1 = str.replaceAll(' ', '');

if (typeof str === 'string') {
    str1 == 'hschool' ? console.log('true') : console.log('false');
} else {
    console.log('Not a string');
}