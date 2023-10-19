// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

const btn = document.querySelector('button')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const inp_1 = document.querySelector('.val_1')
const inp_2 = document.querySelector('.val_2')

class DoHTML {
    mainAction () {
        btn.addEventListener('click', () => {
            this.doPlus()
            this.doMinus()
            this.doMultiply()
            this.doDivide()
        })
    }

    doPlus = () => {
        plus.textContent = +inp_1.value + +inp_2.value
    }
    doMinus = () => {
        minus.textContent = +inp_1.value - +inp_2.value
    }
    doMultiply = () => {
        multiply.textContent = +inp_1.value * +inp_2.value
    }
    doDivide = () => {
        divide.textContent = +inp_1.value / +inp_2.value
    }
}

const dohtml = new DoHTML()
console.log(dohtml.mainAction());


