// Реализуйте Singer – производный класс, базовый – Worker.
// Класс Worker состоит из: свойств name, surname в конструкторе; метода getInfo(), с
// помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname в конструкторе при помощи метода super и
// дополнительно принимает и дополняет конструктор свойствами: years, birth, style;
// класс включает метод getInfo(), который переопределяет метод базового класса и
// расширяет его, отображая в консоль информацию о певце: years, birth, style.
// Необходимо вызвать метод getInfo из 2 экземпляров worker, singer

class Worker {
    name;
    surname;
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getInfo() {
        console.log(`${this.name} ${this.surname}`) 
    }
}

class Singer extends Worker {
    years;
    birth;
    style;

    constructor (name, surname, years, birth, style) {
        super(name, surname)
        this.years = years
        this.birth = birth
        this.style = style
    }

    getInfo() {
        super.getInfo()
        console.log(`${this.years} ${this.birth} ${this.style}`)
    }
}

const singer = new Singer('Ivan','Ivanov', '25', '09.07.1998', 'singer')
console.log(singer.getInfo());

// const worker = new Worker('Ivan','Ivanov')
// console.log(worker.getInfo());
