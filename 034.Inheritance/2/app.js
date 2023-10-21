// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте методы получатели и модификаторы экземпляра класса
// Customer

class Person {
    name;
    address;
    phoneNum;

    setName (name) {
        this.name = name
    }

    setAddress (address) {
        this.address = address
    }

    setPhoneNum (phoneNum) {
        this.phoneNum = phoneNum
    }

    getName () {
        return this.name
    }

    getNumber () {
        return this.number
    }

    getAddress () {
        return this.address
    }
}

class Customer extends Person {
    clientPhone;
    isValid;

    setClientPhone (clientPhone) {
        this.clientPhone = clientPhone
    }

    setIsValid (isValid) {
        this.isValid = isValid
    }

    getClientPhone () {
        return this.clientPhone
    }

    getIsValid () {
        return this.isValid
    }
}

const customer = new Customer()
customer.setName('Nastya')
customer.setAddress('Minsk')
customer.setPhoneNum('375291865935')
customer.setClientPhone('375445562934')
customer.setIsValid(true)

