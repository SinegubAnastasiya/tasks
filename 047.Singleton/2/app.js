// Вы вводите числа в поле для ввода формируя массив. Необходимо отобразить
// массив, а также отдельно все четные элементы этого массива и нечетные. Вы
// вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// Реализовать Html: input, button, div (для отображения результатов)
// [1, 1, 4, 2, 3, 3] -> [4, 2]

class Html {
    countNumbers() {
        const inp = document.querySelector('input');
        const btn = document.querySelector('button');
        const div = document.querySelector('div');
        const p = document.querySelector('p');
        const arr = [];
        const arr_unique = [];

        btn.addEventListener('click', () => {
            for (let i = 0; i < inp.value.length; i++) {
                arr.push(inp.value[i]);
                inp.value = '';
            }
            div.innerHTML = arr;

            for (let i = 0; i < arr.length; i++) {
                if (!arr_unique.includes(arr[i]) && arr[i] % 2 == 0) {
                    arr_unique.push(arr[i]);
                }
            }

            // for (let i = 0; i < arr.length; i++) {
            //     if (arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) {
            //         arr_unique.push(arr[i]);
            //     }
            // }
            p.innerHTML = arr_unique;
        })
    }
}

const html = new Html();
html.countNumbers();