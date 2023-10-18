// Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

// class Validator {
//     phone;

//     constructor (phone) {
//         this.phone = phone
//     }

//     isPhone = () => {
//         try {
//             if (!/^\+375[\(29\)|\(44\)|\(25\)]{4}[1-9][\d]{2}\-[\d]{2}\-[\d]{2}/gm.test(this.phone)) throw new Error('Phone is invalid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator('+375(29)186-59-35')
// console.log(validator.isPhone());

// class Validator {
//     phone;

//     isPhone = () => {
//         try {
//             if (!/^\+375[\(29\)|\(44\)|\(25\)]{4}[1-9][\d]{2}\-[\d]{2}\-[\d]{2}/gm.test(this.phone)) throw new Error('Phone is invalid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator()
// validator.phone = '+375(29)186-59-35'
// console.log(validator.isPhone());

// class Validator {
//     phone = '+375(29)186-59-35';

//     isPhone = () => {
//         try {
//             if (!/^\+375[\(29\)|\(44\)|\(25\)]{4}[1-9][\d]{2}\-[\d]{2}\-[\d]{2}/gm.test(this.phone)) throw new Error('Phone is invalid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator()
// console.log(validator.isPhone());

class Validator {
    isPhone = (phone) => {
        try {
            if (!/^\+375[\(29\)|\(44\)|\(25\)]{4}[1-9][\d]{2}\-[\d]{2}\-[\d]{2}/gm.test(phone)) throw new Error('Phone is invalid')
            return true
        } catch (error) {
            console.log(error.message);
        }
    }
}

const validator = new Validator()
console.log(validator.isPhone('+375(29)186-59-35'));