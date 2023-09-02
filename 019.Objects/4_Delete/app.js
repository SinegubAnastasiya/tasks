const database = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
    { "id" : "test", "label": "Test", "category": "princ", "priority": 4 }
]

const body = {"id" : "test" , "label": "Test", "category": "test", "priority": 1 }

let res = database.filter(function(elem) {
    if (elem.id !== body.id) {
        return true;
    }
}) 

const result = database.filter(elem => elem.id !== body.id)
if (res.id !== body.id) {
    res.push(body)
} else {
    console.log('error');
}

console.log(res);

