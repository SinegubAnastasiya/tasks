// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)

let a = +prompt();

isNaN(a) ? console.log('false') : console.log('true');