// На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true

let str = prompt();
let str1 = prompt();

if (str.toLowerCase() === str1.toLowerCase()) {
    console.log(true);
} else {
    console.log(false);
}

console.log(str.toLowerCase() === str1.toLowerCase() ? true : false);