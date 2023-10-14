// Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”. 

// class Singer {
//     name = 'Nastya';
//     surname = 'Sinegub';
//     getAutograph = () => {
//         return `${this.name} ${this.surname}, с наилучшими пожеланиями`
//     }
// }

// const singer = new Singer()
// console.log(singer.getAutograph());

// class Singer {
//     name;
//     surname;
//     getAutograph = () => {
//         return `${this.name} ${this.surname}, с наилучшими пожеланиями`
//     }
// }

// const singer = new Singer();
// singer.name = 'Nastya';
// singer.surname = 'Sinegub';
// console.log(singer.getAutograph());

class Singer {
    name;
    surname;

    constructor (a, b) {
        this.name = a;
        this.surname = b;
    }

    getAutograph = () => {
        return `${this.name} ${this.surname}, с наилучшими пожеланиями`
    }
}

const singer = new Singer('Nastya', 'Sinegub');
console.log(singer.getAutograph());
