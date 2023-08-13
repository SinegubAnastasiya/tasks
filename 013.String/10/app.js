// На входе строка, необходимо убрать все лишние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на ввод
// только текстовых значений

const str = prompt();

if (typeof str === 'string') {
    console.log(str.replaceAll(' ', '').toLowerCase().repeat(3));
} else {
    console.log('Error');
}