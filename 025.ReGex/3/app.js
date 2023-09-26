// . На вход подается строка из 2 и более слов. Необходимо все симводы заменить на
// пустую строку. 

const str = 'word1 word2';

function replaceWords(str) {
    try {
        if (!/^[a-z0-9]+\ [a-z0-9]+$/gm.test(str)) throw new Error('нет пробела')
        return str.replaceAll(/\s/gm, '')
    } catch (error) {
        return error.message
    }
}

const res = replaceWords(str);
console.log(res);