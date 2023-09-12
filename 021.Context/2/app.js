// Напишите функцию, которая принимает массив строк и находит строку с
// максимальной длиной. Добавить проверки

const arr = ['str12434', 'str2', 'str3758'];

function getMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    let res = arr.filter((elem) =>
        (elem.length === max) ? elem : null
    )
    return res
}

let result = getMax(arr);
console.log(result);