// На сервере реализуйте возможность регистрации doRegistration. Если почта
// клиента уникальна и массив репозитория не содержит такую почту, то сохранить
// клиентский объект в массив

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
        try {
            const res = this.service(clientData);
            return res;
            
        } catch (error) {
            return error.message;
        }
    }

    service (clientData) {
            const res = this.repository(clientData);
            return res;
    }

    repository (clientData) {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
            ];
        const check = data.filter(el => el.email === clientData.email);
        if (check.length) throw new Error('already exists')
        data.push({id: data.length++, ...clientData});
        
        return data;
    }
}

const client = new Client();
client.doRegistration();