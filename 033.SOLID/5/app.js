// Реализуйте класс ServerPost. Обязательными функциями считаются функции
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
// "name": "Test", "age": 1
// }`
// Необходимо добавить в массив БД объект только в том случае, если нет совпадений
// по name. Если совпадения нет, то в объект клиента добавить ключ id с последним
// возможным уникальным id БД, таким образом, чтобы в БД был запушен объект вида
// {"id": 6, "name": "Test", "age": 1}
// Если совпадение есть – ошибка. Добавить проверки 

class ServerPost {
    middleware (json) {
        try {
            if (!json.hasOwnProperty('name')) throw new Error ('Do not include name')
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
            { "id": 5, "name": "Mariya", "age": 27 }
            ]

        const check = arr.some((el) => {
            if (el.name == json.name) return true
        })
        if (check) throw new Error('Name has existed')
        arr.push({ id: arr.length + 1, ...json})
        return arr
    }
}

const serverPost = new ServerPost()
const json = JSON.parse(`{ "name": "Test", "age": 1 }`)
console.log(serverPost.middleware(json));

