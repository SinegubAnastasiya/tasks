// Пользователь вводит строку. Необходимо посчитать количество гласных

// let str = prompt();
// const alph= ['a', 'e', 'i', 'o', 'u', 'y'];
// let sum = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str.includes(alph[i])) {
//         sum++;
//     }
// }

// console.log(count);

let str = prompt();
let sum = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u' || str[i] == 'y') {
        sum++;
    }
}

console.log(sum);
