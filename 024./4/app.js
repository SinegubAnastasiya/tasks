// Дана строка массива. Необходимо спарсить строку. Если же после того как вы
// спарсили данные у вас не массив – бросить исключение. Вывести
// те элементы массива, id котрых – четное значение

const str = `[
    { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "jnkdf", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
    ]`;

function isValidArray(str) {
    if (!Array.isArray(str)) throw new Error ('Это не массив');
    let res = str.every(el => {
        if (!isNaN(el.id)) return true
    })
    if (!res) throw new Error('id не число');
    return true;
}

function getArr(str) {
    try {
        const pars = JSON.parse(str);
        isValidArray(pars);
        const res = pars.filter(el => {
            if (el.id % 2 === 0) return true
            else return false
        })
        return res
    } catch (error) {
        return error.message
    }
}

const res = getArr(str);
console.log(res);