// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)

let month = +prompt();

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log('spring');
        break;

    case 6:
    case 7:
    case 8:
        console.log('summer');
        break;

    case 9:
    case 10:
    case 11:
        console.log('autumn');
        break;

    case 12:
    case 1:
    case 2:
        console.log('winter');
        break;

    default:
        console.log('Error');
}

if (month === 1 || month === 2 || month === 12) {
    console.log('winter');
} else if (month >= 3 && month <= 5) {
    console.log('spring');
} else if (month >= 6 && month <= 8) {
    console.log('summer');
} else if (month >= 9 && month <= 11) {
    console.log('autumn');
} else {
    console.log('Error');
}