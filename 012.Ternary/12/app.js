// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

let a = prompt();
let sotn = Math.floor(a / 100);
let des = Math.floor((a - sotn * 100) / 10);
let ed = (a - sotn * 100) % 10;

console.log(sotn + des + ed);
console.log(sotn * des * ed);



let arr = a.split('');
let sum = 0;
let proizv = 1;

for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    proizv *= Number(arr[i]);
}

console.log(sum, proizv);
