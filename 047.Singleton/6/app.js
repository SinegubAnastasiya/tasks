// Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо в отдельный div вывести все числа кратные 3

class Html {
    doArray() {
        const inp = document.querySelector('input');
        const btn = document.querySelector('button');
        const div = document.querySelector('div');
        const p = document.querySelector('p');
        const arr = [];
        const newArr = [];

        btn.addEventListener('click', () => {
            arr.push(inp.value);
            div.innerHTML = arr;
            inp.value = '';

            for (let i = 0; i < arr.length; i++) {
                if (!newArr.includes(arr[i]) && arr[i] % 3 == 0) {
                    newArr.push(arr[i]);
                }
            }
            p.innerHTML = newArr;
        })
    }
}

const html = new Html();
html.doArray();