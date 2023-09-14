// Напишите функцию, которая принимает строку в виде пароля и проверяет,
// является ли этот пароль надежным. Надежный пароль должен содержать хотя бы
// одну заглавную букву, цифры, а его длина должна быть не менее 8 символов.

const password = 'Gumn409a';
let arr = [];

for (let i = 0; i < password.length; i++) {
    arr.push(password[i]);
}
console.log(arr);

function checkPassword(password) {
    // let result = arr.some(function(elem) {
    //     if (arr.length > 8 && isNumeric(elem) === true) {
    //         return true;
    //     }
    // })
    let newStr = password.toLowerCase();
    let result = arr.some(function(elem) {
        if (typeof elem == 'number') {
            return elem
        }
    })
    if (newStr === password && password.length > 7 && result !== null) {
        return true
    } else {
        return false
    }

}

let res = checkPassword(password);
console.log(res);