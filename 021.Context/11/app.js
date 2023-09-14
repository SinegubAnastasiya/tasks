// Напишите функцию, генерирующую пароль из 8 символов с использованием
// замыкния. (Math.random)

function getPassword() {
    let password = '';
    return function() {
        password += Math.round(Math.random() * 9);
        console.log(password);
    }
}

let result = getPassword();
result();
result();
result();
result();
result();
result();