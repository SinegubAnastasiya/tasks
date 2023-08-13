// На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

let str = prompt().split(' ');

if (str.includes(str[1])) {
    console.log(true);
} else {
    console.log(false);
}