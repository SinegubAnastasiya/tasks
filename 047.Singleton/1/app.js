// Посчитать количество гласных и согласных в строке. Реализовать Html: input,
// button, div (для отображения результата подсчета)

class Html {
    countVowels() {
        const inp = document.querySelector('input');
        const btn = document.querySelector('button');
        const div = document.querySelector('div');

        btn.addEventListener('click', () => {
            const vowels = ['a', 'i', 'u', 'e', 'o'];
            let countVowels = 0;
            let countnot = 0;
            for(let i = 0; i < inp.value.length; i++) {
                if(vowels.includes(inp.value[i])) {
                    countVowels++;
                } else {
                    countnot++;
                }
            }
            div.innerHTML = `гласные: ${countVowels}, согласные: ${countnot}`;
        })
    }
}

const html = new Html();
html.countVowels();