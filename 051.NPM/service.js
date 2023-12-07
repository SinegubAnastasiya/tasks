const arr = [
     { "id": 1, "name": "Yesenia", "age": 22 },
     { "id": 2, "name": "Hanna", "age": 22 },
     { "id": 3, "name": "Stanislau", "age": 25 },
     { "id": 4, "name": "German", "age": 18 },
     { "id": 5, "name": "Maria", "age": 27 }
    ];

function getArr() {
    return arr;
}

function showById(id) {
    const res = arr.filter((el) => {
        if (el.id == id) {
            return true
        }}
        )
    return res
}

function createUser(name, age) {
    const userArr = {
        id: arr.length + 1,
        name: name,
        age: age
    }
    arr.push(userArr);
    return arr;
}

function deleteUser(id) {
    const res = arr.filter(el => el.id != id)
    return res
}

function update(id, name, age) {
    for (obj of arr) {
        if (obj.id == id) {
            obj.name = name;
            obj.age = age;
        }
    }
    return arr
}

module.exports = { getArr, showById, createUser, deleteUser, update };