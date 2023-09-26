// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const str = 'C:/\Users\\Admin\\Desktop\\test.txt';

function checkPath(str) {
    try {
        if (!/^[A-Z]\:(\\|\/)[\w]+(\\|\/)[\w]+(\\|\/)[\w]+(\\|\/)[\w]+\.[a-z]{1,5}$/gm.test(str)) throw new Error('incorrect')
        return true
    } catch (error) {
        return error.message
    }
}

const res = checkPath(str);
console.log(res);