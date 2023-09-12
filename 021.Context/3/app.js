// Напишите функцию, которая принимает адрес электронной почты и возвращает
// объект с полями email и active. Поле active должно быть true, если адрес содержит
// символ '@' и '.com’ / ‘.by', и false в противном случае.
// {
// email,
// active: true / false
// }

let email = 'fedukevi@mail';

function getEmail(email) {
    // return {email: email, active: email.includes('@') && (email.includes('com') || email.includes('by')) ? true : false}
    if (email.includes('@') && (email.includes('.com') || email.includes('.by'))) {
        return { email: email, active: true }
    } else {
        return { email: email, active: false }
    }
}

let result = getEmail(email);
console.log(result);