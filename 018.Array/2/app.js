// На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach

let num = 7;
let firstArr = [];
let secondArr = [];

for (let i = 0; i < num; i++) {
    i < 5 ? firstArr.push(prompt()) : secondArr.push(prompt());
}

let result = firstArr.filter((elem) => {
    for (let i = 0; i < firstArr.length; i++) {
        if (!isNaN(elem) && (elem !== secondArr[i] && elem !== secondArr[i+1])) {
            return true;
        } else {
            return false;
        }
    }
});

if (result.length > 0) {
        console.log(result);
    } else {
        console.log('Массив пуст');
    }










// let res = arr.filter (function(elem) {
//     if (!isNaN(elem) && elem != a && elem != b) {
//         return true;
//     } else {
//         return false;
//     }
// })
// if (res.length > 0) {
//     console.log(res);
// } else {
//     console.log('Массив пуст');
// }
