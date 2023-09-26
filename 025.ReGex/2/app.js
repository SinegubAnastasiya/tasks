// На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const info = 'Name Surname 25';

function checkInfo(info) {
    try {
        if (!/^[A-Z][a-z]+\ [A-Z][a-z]+\ [1-9]{1,2}$/gm.test(info)) throw new Error('not valid')
        return true
    } catch (error) {
        return error.message
    }
}

const res = checkInfo(info);
console.log(res);