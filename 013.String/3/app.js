// Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

const str = prompt().toLowerCase().replaceAll(' ', '');

if (isNaN(str)) {
    console.log(str.length);
} else {
    console.log('ошибка ввода');
}