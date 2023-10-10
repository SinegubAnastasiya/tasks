// У вас есть объект, представляющий собой список студентов и их оценок
// (например, { Анна: 95, Иван: 88, Мария: 92 }). Используйте Object.keys() и Array.filter()
// для фильтрации студентов, у которых оценки выше определенного порога.

const obj = {
    Анна: 95, 
    Иван: 'mjdfk', 
    Мария: 92
}

function isValid(val) {
    val.every((el) => {
        if(isNaN(el)) throw new Error('Not a number')
    })
}

function filterMarks(obj, num) {
    try {
        let val = Object.values(obj);
        isValid(val);
        const res = val.filter((el) => {
            if(el > num) return el;
        })
        return res
    } catch (error) {
        return error.message
    }
}

const res = filterMarks(obj, 90);
console.log(res);