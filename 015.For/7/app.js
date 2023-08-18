// Преобразуйте первую букву строки в верхний регистр несколькими способами

// 1 способ
// let str = 'string'.split('');
// console.log(str[0].toUpperCase() + str.slice(1).join(''));

// 2 способ
let str = 'string'.split('');
let res = '';

for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        res += str[i].toUpperCase() + str.slice(1).join('');
    }
}
console.log(res);

