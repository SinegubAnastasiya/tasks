// На входе массив чисел. Реализуйте функцию, которая находит наибольшую
// последовательность непрерывных чисел в массиве и возвращает ее. Например,
// для массива [1, 2, 3, 4, 5, 6, 2, 3, 4] функция должна вернуть [1, 2, 3, 4, 5, 6].

const arr = [1, 2, 3, 4, 5, 6, 2, 3, 4];
let nArr = [];

function getArr(arr) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i + 1] == arr[i] + 1) {
            nArr.push(arr[i])
        } else {
            nArr.push(arr[i]);
            break;
        }
    }
}

getArr(arr);
console.log(nArr);