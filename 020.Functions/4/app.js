// Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const arr = ['by', 'belarus', 'de', 'ru', 'germany'];

function getFilter(arr) {
    let nArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 3) {
            nArr.push(arr[i]);
        }
    }

    // let res = arr.filter(function(elem)) {
    //     if (elem.length < 3) {
    //         return true;
    //     }
    // }

    return nArr;
}

const res = getFilter(arr);
console.log(res);