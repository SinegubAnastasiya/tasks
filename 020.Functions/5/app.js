// На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [2, 3, 9, 5, 12];

function checkArr(arr) {
    let res = arr.every(function(elem) {
        if (!isNaN(elem)) {
            return true;
        }
    }) 
    return res;
}

let result = checkArr(arr);
console.log(result);
