// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив

// class ServerGetAll {
//     controller () {
//         try {
//             const data = this.service()
//             return data
//         } catch (error) {
//             return error.message
//         }
//     }

//     service () {
//         const data = this.repository()
//         return data
//     }

//     repository () {
//         const arr = [{id: 1, name: 'nastya'}, {id: 2, name: 'kolya'}, {id: 3, name: 'vlad'}]
//         return arr
//     }
// }

// const servergetall = new ServerGetAll()
// console.log(servergetall.controller());

// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив

class ServerGetAll {
    controller = () => {
        try {
            const res = this.service()
            return res
        } catch (error) {
            console.log(error.message);
        }
    }

    service () {
        const res = this.repository()
        return res
    }

    repository () {
       const arr = [{id: 1, name: 'nastya'}, {id : 2, name : 'vlad'}]
        return arr
    }
}

const serverGetAll = new ServerGetAll()
console.log(serverGetAll.controller());





