// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false

let str = 'тест';
let arr = str.split('');

console.log(arr == arr.reverse() ? true : false);