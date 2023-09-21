// На входе два массива чисел. Реализуйте функцию, которая проверяет, есть ли в
// обоих массивах хотя бы один общий элемент, и возвращает true, если такой
// элемент найден. Если нет общих элементов, функция возвращает false

const arr1 = [5, 7, 14, 26, 78];
const arr2 = [2, 6, 7];

function isValid(arr1, arr2) {
    const res = arr1.every(function (el) {
        return !isNaN(el)
    })
    const res2 = arr2.every(function (el) {
        return !isNaN(el)
    })
    return (res && res2) ? true : false
}

function getSimilar(arr1, arr2) {
    if (isValid(arr1, arr2)) {
        return arr1.some(function (elem) {
            return arr2.includes(elem);
        });
    } else return 'ERROR'
}

const result = getSimilar(arr1, arr2);
console.log(result);