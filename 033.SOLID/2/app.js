// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна

const btn = document.querySelector('button')
const inp = document.querySelector('input')
const p = document.querySelector('p')


class DomHTML {


    middleware = () => {
        btn.addEventListener('click', () => {
            try {
                if (!/^[\w]+@[a-z]+\.[a-z]{2,5}/gm.test(inp.value)) throw new Error('Email is not valid')
                else p.textContent = 'true'
            } catch (error) {
                return error.message
            }
        })
    }
}

const domHTML = new DomHTML()
domHTML.middleware()


