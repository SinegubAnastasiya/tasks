// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

let str = 'hello';
let gl = 'aeyuio';
let result = '';

for (let i = 0; i < str.length; i++) {
    if (str.includes(gl[i])) {
        result += gl[i];
    }
}
console.log(result);

