// Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.

const name = document.querySelector('.name');
const email = document.querySelector('.email');
const pwd = document.querySelector('.pwd');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    try {
        if (!name.value || !pwd.value || !email.value) throw new Error ('Input is empty')
        if (!/^[\w]+@[a-z]+\.[a-z]{2,5}$/gm.test(email.value)) throw new Error ('email is not valid')
        if (!/^[\w]{8,}$/gm.test(pwd.value)) throw new Error ('password is not valid')
        if (!isNaN(name.value)) throw new Error ('name is not valid')
        alert('Registration is successful')
    } catch (error) {
        alert(error.message);
    }
})


