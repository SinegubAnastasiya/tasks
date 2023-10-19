// Реализуйте класс ServerGetById. Обязательными функциями считаются функции
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
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки 

class ServerGetById {
    middleware (json) {
        try {
            if (!json.hasOwnProperty('id')) throw new Error('Invalid')
            if (json.id < 0) throw new Error('ID < 0')
            const res = this.controller(json)
            return res
        } catch (error) {
            return error.message
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
        const arr = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
            ]
        return arr.filter((el) => el.id == json.id)
    }
}

const servergetbyid = new ServerGetById()
const json = JSON.parse(`{ "id": -5 }`)
console.log(servergetbyid.middleware(json));