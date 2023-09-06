const database = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
    ]

const body = { "label": "Test", "category": "test", "priority": 1 }

const res = database.filter(function(elem) {
    if (elem.label === body.label) {
        return true;
    } 
})

body.id = body.label.toLowerCase();
if (res.length === 0) {
    database.push(body);
    console.log(database);
} else {
    console.log('error');
}

