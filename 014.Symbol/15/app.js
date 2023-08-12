// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

let str = 'hello';
let gl = 'aeyuio';
let result = '';

for (let i = 0; i < str.length; i++) {
    if (gl.includes(str[i])) {
        result += str[i];
    }
}
console.log(result);

