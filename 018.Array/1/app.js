// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

let num = 5;
let arr = [];

for (let i = 0; i < num; i++) {
    arr.push(prompt('введите элемент массива'));
}

let res = arr.filter(function(elem) {
    if (!isNaN(elem)) {
        return true;
    } else {
        return false;
    }
})

if (res.length > 0) {
    console.log(res);
} else {
    console.log('Массив пуст');
}

