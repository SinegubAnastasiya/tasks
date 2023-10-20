// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна. 

const btn = document.querySelector('button')
const inp = document.querySelector('input')
const p = document.querySelector('p')

class DomHtml {
    middleware = () => {
        btn.addEventListener('click', () => {
        try {
                if(!/^[\da-z]{8}\-[\da-z]{4}\-[\da-z]{4}\-[\da-z]{4}\-[\da-z]{12}$/gm.test(inp.value)) throw new Error('Invalid')
                else p.textContent = 'true'
            }
        catch (error) {
            p.textContent = error.message;
        }})
    }
}

const domhtml = new DomHtml();
domhtml.middleware();
