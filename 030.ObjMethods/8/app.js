// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму. 

const num = '12345'.split('');

function isValid(num) {
    const res = num.every(el => isNaN(el))
    if(!res) throw new Error('Invalid')
}

function getNum(num) {
    try {
        isValid(num)
        let res = 0;
        for (let i = 0; i < num.length; i++) {
            res += num[i] ** i;
        }
        return res
    } catch (error) {
        return error.message
    }
}

const res = getNum(num);
console.log(res);