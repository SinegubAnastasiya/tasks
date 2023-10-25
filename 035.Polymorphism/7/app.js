// Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Server {
    middleware(obj) {
        const res = this.controller(obj)
        return res
    }
    controller(obj) {
        const res = this.service(obj)
        return res
    }
    service(obj) {
        const res = this.repository(obj)
        return res
    }
    repository(obj) {
        const arr = [
        { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
        { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
        { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
        { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
        { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ]
        const check = arr.some((el) => {
            if (el.email == obj.email) return true
        })
        if (check) throw new Error('Email has existed')
        arr.push({ id: arr.length + 1, ...obj})
        return arr
    }
}

const server = new Server()
const obj = {email: 'fedukevi98@mail.ru', pwd: '8347jkgdg'}
console.log(server.controller(obj)); 
