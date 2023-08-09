// .Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

let str = prompt();

if (typeof str === 'string') {
    str === 'hschool' ? console.log('true') : console.log('false');
} else {
    str % 2 === 0 ? console.log('Число четное') : console.log('Число нечетное');
}