// Преобразуйте первую букву каждого слова строки в верхний регистр.

let str = 'string string'.split(' ');
let res = '';

for (let i = 0; i < str.length; i++) {
    res += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
}
console.log(res);