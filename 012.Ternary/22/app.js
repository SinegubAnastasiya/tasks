// . Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l

let str = prompt();

typeof str === 'string' ? console.log(str.replaceAll(' ', '').toLowerCase().split('').join('-')) : console.log('Error. Input text');