// Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
// ними равно S км. Добавить проверку на ввод только чисел

let v1 = +prompt();
let v2 = +prompt();
let s = +prompt();

if (isNaN(v1) || isNaN(v2) || isNaN(s)) {
    console.log('Error');
} else {
    console.log(s / (v1 + v2));
}

isNaN(v1) || isNaN(v2) || isNaN(s) ? console.log('Error') : console.log(s / (v1 + v2));