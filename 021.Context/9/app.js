// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
    id: 1,
    name: 'Nastya',
    city: 'Minsk',
    age: 25
};

// function getNewObject(obj) {
//     let newObj = {};
//     for (let key in obj) {
//         if (!isNaN(obj[key])) {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj
// }

// let result = getNewObject(obj);
// console.log(result);

(function(obj) {
    let newObj = {};
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            newObj[key] = obj[key];
        }
    }
    console.log(newObj);
})(obj);