const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { getArr, showById, createUser, deleteUser, update } = require('./service')

app.use(bodyParser.json())
app.get('/', (req, res) => {
    const arr = getArr();
    res.send(arr)
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    const int = showById(id);
    res.send(int)
})

app.post('/', (req, res) => {
    const { name, age } = req.body;
    const user = createUser(name, age);
    res.send(user)
})

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const upd = update(id, name, age);
    res.send(upd)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    const update = deleteUser(id);

    res.send(update)
})

app.listen(3000, () => console.log('server run'))



// 1. Установить пакет npm
// 2. Поставить сервер
// 3. Добавить 2 обработчика маршрута: get, post
// 4. На сервере есть файл сервисов. В нем глобально хранится массив. Прописать
// логику так, чтобы при get запросе отправлялся ответ клиенту с массивом внутри
// тела
// 5. На сервере есть файл сервисов. В нем глобально хранится массив объектов.
// Прописать логику так, чтобы при get запросе отправлялся ответ клиенту с
// массивом внутри тела и статус ответа
// 6. Добавить 1 обработчик маршрута: get с url “/:id”. На сервере есть файл сервисов. В
// нем глобально хранится массив объектов. Прописать логику так, чтобы при get
// запросе отправлялся ответ клиенту с объектом, id которого совпадает с
// запрашиваемым id, статус ответа
// 7. Для post запроса добавить добавление тела запроса в массив и возвращать
// обновленный массив, статус ответа
// 8. Добавить 2 обработчика маршрута: put, delete
// 9. Для put с url “/:id” запроса добавить обновление массива по id и возвращать
// обновленный массив, статус ответа
// 10. Для delete с url “/:id” удалять по id элемент массива
// [
// { "id": 1, "name": “Yesenia", "age": 22 },
//  { "id": 2, "name": “Hanna", "age": 22 },
//  { "id": 3, "name": "Stanislau", "age": 25 },
//  { "id": 4, "name": "German", "age": 18 },
//  { "id": 5, "name": "Maria", "age": 27 }
// ]