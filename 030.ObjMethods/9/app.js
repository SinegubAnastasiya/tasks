// Создайте функцию, которая принимает два объекта. Используйте hasOwnProperty,
// чтобы объединить только те свойства, которые существуют в обоих объектах.

const obj = {
    id: 123,
    city: 'Minsk',
    age: 25
}

const obj_2 = {
    id: 234,
    city: 'Minsk',
    name: 'Nastya'
}

function getNewObj(obj, obj_2) {
    try {
        const val = Object.keys(obj);
        console.log(val);
        for (let i = 0; i < val.length; i++) {
            if (obj_2.hasOwnProperty(val[i]) == true) return val[i]
            else return false
        }
    } catch (error) {
        return error.message
    }
}

const res = getNewObj(obj, obj_2);
console.log(res);