// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE


(function () {
    try {
        const obj = {
            id: 1, 
            age: 25,
            city: 'Minsk',
            street: 42,
            name: 'Nastya'
        }
        let nObj = {}
        
        for (let key in obj) {
            if (!isNaN(obj[key])) {
                nObj[key] = obj[key]
            }
        }
        console.log(nObj);
    } catch (error) {
        console.log(error.message);
    }
}())