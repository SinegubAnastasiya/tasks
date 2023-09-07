// Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
// happy new year -> happy NEW year

const str = prompt().split(' ');

function changeWords(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
            arr.push(str[i].toUpperCase());
        } else {
            arr.push(str[i].toLowerCase());
        }
    }
    return arr;
}

let res = changeWords(str);
console.log(res);