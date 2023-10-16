// Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

// class Hashtag {
//     n;
//     arr = [];

//     constructor (num) {
//         this.n = num
//     }

//     doHashtag = () => {
//         try {
//             if (!this.n) throw new Error ('Field n is empty')
//             if (isNaN(this.n)) throw new Error ('N is not a number')
//             for (let i = 0; i < this.n; i++) {
//                 this.arr[i] = prompt();
//             }
//             return this.arr.map((el) => {
//                 return '#' + el
//             })
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const hashtag = new Hashtag('5');
// console.log(hashtag.doHashtag());

// class Hashtag {
//     n;
//     arr = [];

//     doHashtag = () => {
//         try {
//             if (!this.n) throw new Error ('Field n is empty')
//             if (isNaN(this.n)) throw new Error ('N is not a number')
//             for (let i = 0; i < this.n; i++) {
//                 this.arr[i] = prompt();
//             }
//             return this.arr.map((el) => {
//                 return '#' + el
//             })
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const hashtag = new Hashtag();
// hashtag.n = 5;
// console.log(hashtag.doHashtag());

// class Hashtag {
//     n = 2;
//     arr = [];

//     doHashtag = () => {
//         try {
//             if (!this.n) throw new Error ('Field n is empty')
//             if (isNaN(this.n)) throw new Error ('N is not a number')
//             for (let i = 0; i < this.n; i++) {
//                 this.arr[i] = prompt();
//             }
//             return this.arr.map((el) => {
//                 return '#' + el
//             })
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const hashtag = new Hashtag();
// console.log(hashtag.doHashtag());

class Hashtag {
    arr = [];

    doHashtag = (n) => {
        try {
            if (!n) throw new Error ('Field n is empty')
            if (isNaN(n)) throw new Error ('N is not a number')
            for (let i = 0; i < n; i++) {
                this.arr[i] = prompt();
            }
            return this.arr.map((el) => {
                return '#' + el
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

const hashtag = new Hashtag();
console.log(hashtag.doHashtag(5));