// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const str = 'https://regex101.com';

function checkURL(str) {
    try {
        if(!/^(https|http)\:\/\/[a-z0-9]+\.[a-z]{1,5}$/gm.test(str)) throw new Error('incorrect')
        return true
    } catch (error) {
        return error.message
    }
}

const res = checkURL(str);
console.log(res);