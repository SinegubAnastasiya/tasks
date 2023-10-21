// Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади

class Figure {
    pi = 3.14;
    r;
    a;
    h;

    setR (r) {
        this.r = r
    }

    setA (a) {
        this.a = a
    }
    setH (h) {
        this.h = h
    }
}

class Circle extends Figure {
    name = 'circle';
    square;

    setSquare () {
        this.square = this.pi * this.r ** 2
    }

    getSquare () {
        return `${this.name} ${this.square}`
    }
}

class Triangle extends Figure {
    name = 'triangle';
    square;

    setSquare () {
        this.square = 0.5 * this.a * this.h
    }

    getSquare () {
        return `${this.name} ${this.square}`
    }
}

class Square extends Figure {
    name = 'square';
    square;

    setSquare () {
        this.square = this.a * this.a
    }

    getSquare () {
        return `${this.name} ${this.square}`
    }
}

const circle = new Circle();
circle.setR(5)
circle.setSquare()
console.log(circle.getSquare());

const triangle = new Triangle();
triangle.setA(6)
triangle.setH(10)
triangle.setSquare()
console.log(triangle.getSquare());

const square = new Square();
square.setA(5)
square.setSquare()
console.log(square.getSquare());
