// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого)
// преобразовать в верхний регистр
// anna_test_test -> annaTestTest

// let arr = 'anna_test_test'.split('_');
// let res = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     res += arr[i][0].toUpperCase() + arr[i].slice(1);
// }
// console.log(res);

let arr = 'anna_test_test'.split('_');
let res = '';

for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        res += arr[i];
        continue;
    }
    res += arr[i][0].toUpperCase() + arr[i].slice(1);
}
console.log(res);