// . Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки

let str = prompt();

isNaN(str) ? console.log('true', str.length) : console.log('Error. Input the string');