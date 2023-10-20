// Реализуйте класс ServerDelete. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

class ServerDelete {
    middleware (json) {
        try {
            if (!json.hasOwnProperty('id')) throw new Error ('Id does not exist')
            const res = this.controller(json)
            return res
        } catch (error) {
            return error.message;
        }
    }

    controller (json) {
        const res = this.service(json)
        return res
    }

    service (json) {
        const res = this.repository(json)
        return res
    }

    repository (json) {
        const arr = 
        [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ]

        const res =  arr.some((el) => {
            if (el.id !== json.id) throw new Error ('ERROR')
            else return true
        })
        if (res) {
             return arr.filter(el => el.id !== json.id)
        }
    }
}

const serverdelete = new ServerDelete()
const json = JSON.parse(`{ "id": 1 }`)
console.log(serverdelete.middleware(json));