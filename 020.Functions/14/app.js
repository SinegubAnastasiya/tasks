// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [2, 4, 79, 35, 1, 99, 'gujvg'];

function checkArr(arr) {
    let res = arr.every(function(elem) {
        if (typeof elem === 'number') {
            return true;
        } else {
            return false;
        }
    })
    return res;
}

function searchArr(arr) {
    let check = checkArr(arr);
    if (check === true) {
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > res) {
                res = arr[i];
            } 
        }
        return res;
    } else {
        return 'ERROR'
    }
}

let result = searchArr(arr);
console.log(result);