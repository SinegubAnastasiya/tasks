// . На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const email = 'sinegubgmail.com';

function checkEmail(email) {
    try {
        if (!email.includes('@')) throw new Error('Введите корректный email');
        return true
    } catch (error) {
        return error.message;
    }
}

const res = checkEmail(email);
console.log(res);