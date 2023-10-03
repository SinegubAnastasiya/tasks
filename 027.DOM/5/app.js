// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи. 

const btn = document.querySelector('.button');
const inp = document.querySelector('input');



btn.addEventListener('click', () => {
    try {
        const n = inp.value;
        if (n > 0) {
            function getFibonacchi(n) {
                let arr = [];
                let first = 0, second = 1;
                for (let i = 0; i < n; i++) {
                    second = first + second;
                    first = second - first;
                    arr.push(first);
                }
                alert(arr);
            }
            getFibonacchi(n);
        } else {
            throw new Error('Not > 0')
        }
    } catch (error) {
        alert(error.message);
    }
})