// Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран. 

class Employee {
    name;
    number;
    setName (name) {
        this.name = name
    }

    setNumber (number) {
        this.number = number
    }
    getName () {
        return this.name
    }

    getNumber () {
        return this.number
    }
}

class ProductionWorker extends Employee {
    shiftnum;
    rate;
    setShiftNum (shiftnum) {
        this.shiftnum = shiftnum
    }

    setRate (rate) {
        this.rate = rate
    }

    getShiftNum () {
        return this.shiftnum
    }

    getRate () {
        return this.rate
    }
}

const productionWorker = new ProductionWorker()
productionWorker.setName('Nastya')
productionWorker.setNumber('1')
productionWorker.setShiftNum('5')
productionWorker.setRate('30')
console.log(productionWorker.getName());
console.log(productionWorker.getNumber());
console.log(productionWorker.getShiftNum());
console.log(productionWorker.getRate());
