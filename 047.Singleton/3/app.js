// Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх. Реализовать Html: input, button, div (для
// отображения результата проверки регулярного выражения)

class Html {
    isDate() {
        const inp = document.querySelector('input');
        const btn = document.querySelector('button');
        const div = document.querySelector('div');

        btn.addEventListener('click', () => {
            (/^[0-3][0-9]\-[1-12]{2}\-[1-2][0-9]{3}$/gm.test(inp.value)) ? 
            div.innerHTML = 'true' : 
            div.innerHTML = 'false'
        })
    }
}

const html = new Html();
html.isDate();