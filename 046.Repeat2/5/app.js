// Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Client {
    doRegistration() {
        const email = document.querySelector('.email');
        const pwd = document.querySelector('.pwd');
        const btn = document.querySelector('button');

        btn.addEventListener('click', () => {
            let clientData = {email: email.value, pwd: pwd.value};
            const server = new Server();
            const res = server.controller(clientData);
            console.log(res);
            email.value = '';
            pwd.value = '';
        })
    }
}

class Server {
    // middleware(clientData) {

    // }
    controller (clientData) {
        const res = this.service(clientData);
        return res;
    }

    service (clientData) {
        const res = this.repository(clientData)
        return res
    }

    repository (clientData) {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
            ];
        data.push({id: data.length++, ...clientData})
        return data;
    }
}

const client = new Client();
client.doRegistration();