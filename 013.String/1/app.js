// Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]

let str = prompt();

if (isNaN(str)) {
    console.log(str.split(''));
} else {
    // if (str % 2 === 0) {
    //     console.log('четное');
    // } else {
    //     console.log('нечетное');
    // }
    str % 2 === 0 ? console.log('четное') : console.log('нечетное');
    console.log(str % 2 === 0 ? 'четное' : 'нечетное');
}