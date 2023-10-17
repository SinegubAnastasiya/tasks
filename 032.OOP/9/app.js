// Дополнить класс Validator. Добавить метод isURL для проверки на url.

// class Validator {
//     url;

//     constructor (url) {
//         this.url = url;
//     }

//     isURL = () => {
//         try {
//             if(!/^[a-z]{4,5}:\/\/[\w\-]+\.[a-z]{2,5}/gm.test(this.url)) throw new Error('Url is invalid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator('https://regex101.com/')
// console.log(validator.isURL());

// class Validator {
//     url;

//     isURL = () => {
//         try {
//             if(!/^[a-z]{4,5}:\/\/[\w\-]+\.[a-z]{2,5}/gm.test(this.url)) throw new Error('Url is invalid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator()
// validator.url = 'https://regex101.com/'
// console.log(validator.isURL());

// class Validator {
//     url = 'https://regex101.com/';

//     isURL = () => {
//         try {
//             if(!/^[a-z]{4,5}:\/\/[\w\-]+\.[a-z]{2,5}/gm.test(this.url)) throw new Error('Url is invalid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator()
// console.log(validator.isURL());

class Validator {

    isURL = (url) => {
        try {
            if(!/^[a-z]{4,5}:\/\/[\w\-]+\.[a-z]{2,5}/gm.test(url)) throw new Error('Url is invalid')
            return true
        } catch (error) {
            console.log(error.message);
        }
    }
}

const validator = new Validator()
console.log(validator.isURL('https://regex101.com/'));