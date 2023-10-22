// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

const btn = document.querySelector('button')
const mail = document.querySelector('.mail')
const pwd = document.querySelector('.pwd')
const p = document.querySelector('p')

class Client {
    sendRequest() {
        try {
            btn.addEventListener('click', () => {
                if (!/^[\w]+@[a-z]+\.[a-z]{2,5}$/gm.test(mail.value)) throw new Error ('Email is invalid')
                if (!mail.value || !pwd.value) throw new Error ('Email or password is empty')
                p.textContent = `Email: ${mail.value}, pwd: ${pwd.value}`
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

const client = new Client();
client.sendRequest()