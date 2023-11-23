// 4. У вас есть 3 инпута. Необходимо вывести в div результат конкатенацию всех
// инпутов по клику на кнопку

class Html {
    sumInp() {
        const first = document.querySelector('.first');
        const sec = document.querySelector('.second');
        const third = document.querySelector('.third');
        const btn = document.querySelector('button');
        const div = document.querySelector('div');

        btn.addEventListener('click', () => {
            div.innerHTML += `${first.value}${sec.value}${third.value}`
        })
    }
}

const html = new Html();
html.sumInp();