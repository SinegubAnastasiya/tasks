// На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

let arr = [];
const obj = {
    id: 1,
    id1: 5,
    id2: 12,
    id3: 8,
    id4: 25,
}

for (let key in obj) {
    arr.push(obj[key]);
}
console.log(arr);