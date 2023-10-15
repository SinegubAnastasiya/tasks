// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

// class Validator {
//     email;

//     constructor (email) {
//         this.email = email;
//     }

//     isEmail = () => {
//         try {
//             if (!this.email) throw new Error('Email is empty')
//             if (!/^[\w]+@[a-z]+\.[a-z]{2,5}/gm.test(this.email)) throw new Error('Email is invalid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator('fedukevi98@mail.ru');
// console.log(validator.isEmail());

class Validator {
    email;

    constructor (email) {
        this.email = email;
    }

    isEmail = () => {
        try {
            if (!this.email) throw new Error('Email is empty')
            if (!/^[\w]+@[a-z]+\.[a-z]{2,5}/gm.test(this.email)) throw new Error('Email is invalid')
            return true
        } catch (error) {
            console.log(error.message);
        }
    }
}

const validator = new Validator('fedukevi98@mail.ru');
console.log(validator.isEmail());