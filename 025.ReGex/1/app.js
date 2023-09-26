// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const str = '34847854';

function checkString(str) {
    try {
        if (!/^(\+|\-)[\d]+$/gm.test(str)) throw new Error('Не только числа в строке')
        return true
    } catch (error) {
        return error.message
    }
}

const res = checkString(str);
console.log(res);