// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

let str = prompt();

isNaN(str) ? console.log(str.toUpperCase()) : console.log('Error. Input the string');