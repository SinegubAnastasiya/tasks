// На вход программе подается строковое значение. Если значение больше 2-х и
// меньше 11-ти или больше или равна 26-ти и меньше 30-ти, то выведите 'Верно', в
// противном случае выведите 'Неверно'.

let str = 'hjbkbjkldrbgld';

if (str.length > 2 && str.length < 11 || str.length >= 26 && str.length < 30) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

console.log(str.length > 2 && str.length < 11 || str.length >= 26 && str.length < 30 ? 'Верно' : 'Неверно');