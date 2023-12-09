const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { getArr, getById, addElement, updateElement, deleteElementById } = require('./service')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    try {
        const data = getArr()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params
        const newArr = getById(id)
        res.status(200).send(newArr)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body
        const newElement = addElement(label, category, priority)
        res.status(200).send(newElement)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params
        const { label, category, priority } = req.body
        const updatedArr = updateElement(id, label, category, priority)
        res.status(200).send(updatedArr)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params
        const result = deleteElementById(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


app.listen(3000, () => console.log('Server is running'))
