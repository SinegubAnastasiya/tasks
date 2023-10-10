// Создайте объект, представляющий информацию о товарах в интернет-магазине
// (например, { product1: 10, product2: 5, product3: 8 }). Используйте Object.keys() для
// подсчета общего количества различных товаров.

const obj = {
    product1: 10, 
    product2: 5, 
    product3: 8
}

function isValid(val) {
    val.forEach(function(el) {
        if (isNaN(el)) throw new Error('Not a number')
    })
}

function getSum(obj) {
    try {
        const val = Object.values(obj);
        isValid(val);
        let res = val.reduce(function (sum, elem) {
            return sum += elem;
        }, 0)
    } catch (error) {
        return error.message
    }
}

const res = getSum(obj);
console.log(res);