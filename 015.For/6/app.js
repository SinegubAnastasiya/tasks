// Выведите на экран случайное целое число от 1 до 100. (Math.random)

let num = 100;
let b = 0;
 for (let i = 1; i < num; i++) {
    b = Math.floor(Math.random() * num) + 1;
 }
 console.log(b);