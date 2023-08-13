// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

const str = prompt();

console.log(str.length);

console.log(str.indexOf(' ')+1);

console.log(str.split(' ').slice(1));