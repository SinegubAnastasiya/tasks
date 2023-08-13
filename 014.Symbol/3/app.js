// На вход подаются 2 строки. Если исходная 1 строка заканчивается на 2 строку
// вывести true, в противном случае false

let str = prompt();
let str1 = prompt();

if (str.endsWith(str1)) {
    console.log(true);
} else {
    console.log(false);
}

str.endsWith(str1) ? console.log(true) : console.log(false);

console.log(str.endsWith(str1) ? true : false);

if (str.endsWith(str1)) console.log(true);
else console.log(false);