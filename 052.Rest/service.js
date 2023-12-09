const arr = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
    { "id": "firebasestorage", "label": "Firebase Storage", "category": "databases", "priority": 2 },
    { "id": "ibmcloudant", "label": "IBM Cloudant", "category": "databases", "priority": 2 },
    { "id": "react", "label": "React", "category": "webTechnologies", "priority": 1 },
    { "id": "angularjs", "label": "ANGULARJS", "category": "webTechnologies", "priority": 1 },
    { "id": "redux", "label": "Redux", "category": "webTechnologies", "priority": 1 },
    {"id": "materialui","label": "Material UI","category": "webTechnologies","priority": 1 },
    {"id": "git","label": "Git","category": "otherSkills","priority": 2 },
    {"id": "adobephotoshop","label": "Adobe Photoshop","category": "otherSkills","priority": 2 },
    ];

    function getArr() {
        if (!arr.length) throw new Error('arr is empty')
        return arr
    }

    function getById(id) {
        const newArr = arr.filter(el => el.id == id)
        if (!newArr.length) throw new Error('This id not found')
        return newArr
    }

    function addElement(label, category, priority) {
        const obj = {
            id: label.toLowerCase(),
            label: label,
            category: category,
            priority: priority
        }
        if (obj.id !== arr.id) arr.push(obj)
        return arr
    }

    function updateElement(id, label, category, priority) {
        const updateFilter = arr.filter(el => el.id !== id)
        updateFilter.push({
            id: id,
            label: label,
            category: category,
            priority: priority
        })
        return updateFilter
    }

    function deleteElementById(id) {
        const arrWithoutDeletedEl = arr.filter(el => el.id != id)
        if (arr.length == arrWithoutDeletedEl.length) throw new Error ('this id not found')
        return arrWithoutDeletedEl
    }

    module.exports = { getArr, getById, addElement, updateElement, deleteElementById }

