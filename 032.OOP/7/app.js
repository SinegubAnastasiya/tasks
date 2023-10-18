// Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки 

// class ServerGetById {
//     controller (json) {
//         try {
//             const data = this.service(json)
//             return data
//         } catch (error) {
//             return error.message
//         }
//     }

//     service (json) {
//         const data = this.repository(json)
//         return data
//     }

//     repository (json) {
//         const arr = [{id: 1, name: 'nastya'}, {id: 2, name: 'kolya'}, {id: 3, name: 'vlad'}]
//         const res = arr.filter((el) => el.id == json.id)
//         return res
//     }
// }

// const servergetbyid = new ServerGetById()
// const json = JSON.parse(`{"id": "1"}`)
// console.log(servergetbyid.controller(json));

// class ServerCreate {
//     controller (json) {
//         try {
//             const data = this.service(json)
//             return data
//         } catch (error) {
//             return error.message
//         }
//     }

//     service (json) {
//         const data = this.repository(json)
//         return data
//     }

//     repository (json) {
//         const arr = [{id: 1, name: 'nastya'}, {id: 2, name: 'kolya'}, {id: 3, name: 'vlad'}]
//         const newData = {
//             // id: Math.round(Math.random() * 10),
//             id: arr.length + 1,
//             ...json
//         }
//         arr.push(newData)
//         return arr
//     }
// }

// const servercreate = new ServerCreate()
// const json = {name : 'test'}
// console.log(servercreate.controller(json));

// class ServerDelete {
//     controller (json) {
//         try {
//             const data = this.service(json)
//             return data
//         } catch (error) {
//             return error.message
//         }
//     }

//     service (json) {
//         const data = this.repository(json)
//         return data
//     }

//     repository (json) {
//         const arr = [{id: 1, name: 'nastya'}, {id: 2, name: 'kolya'}, {id: 3, name: 'vlad'}]
//         const data = arr.filter((el) => el.id !== json.id)
//         return data
//     }
// }

// const serverdelete = new ServerDelete()
// // const json = { id: 1 }
// const json = { id: +prompt() }
// console.log(serverdelete.controller(json));


// Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки 

class ServerById {
    controller (json) {
        try {
            const res = this.service(json)
            if (!isNaN(res)) throw new Error('There is no such object') 
            return res
        } catch (error) {
            console.log(error.message);
        }
    }

    service (json) {
        const res = this.repository(json)
        return res
    }

    repository (json) {
        const arr = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
            ];
        const res = arr.filter((el) => el.id === json.id)
        return res
    }
}

const serverById = new ServerById()
json = JSON.parse(`{ "id": "javascript" }`)
console.log(serverById.controller(json));