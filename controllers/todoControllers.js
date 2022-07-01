// dependencies
const Todo = require('../model/todo')

// GET To-do list
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json({"Todos" : todos})
    } catch (error) {
        res.status(500).json({"Error" : `${error.message}`})
    }
}

// POST a To-do
const addTodo = async (req, res) => {

    // validate request
    if (!req.body) {
        return res.status(400).json({"Error": "Todo fields cannot be empty!"})
    }

    // destructuring the required fields from the body
    let { title, description } = req.body

    // initializing a new To-do
    const newTodo = new Todo({
        title: title,
        description: description
    })

    try {
        // save the new todo to the Todo collection
        await newTodo.save()
        res.status(200).json({"Message": "The new todo was created successfully!"})
    } catch (error) {
        res.status(500).json({
            "Error" : error.message || "An error occured when saving the new to-do!"
        })
    }
}

// PUT a To-do by id
const updateTodo = async (req, res) => {
    // getting the id from the URL params
    const id = req.params.id

    // destructuring the required fields from the body
    let { title, description } = req.body

    // check if id is present
    if (!id && !title && !description) {
        return res.status(400).json({"Error": "Missing required field(s) or parameter!"})
    }

    try {
        // find the todo and update it in the Todo collection
        await Todo.findByIdAndUpdate(id, { title: title, description: description }, { upsert: true })
        res.status(200).json({"Message": `The todo with the id ${id} was updated successfully!`})
    } catch (error) {
        res.status(500).json({
            "Error" : error.message || `An error occured when updating the todo with the id ${id}`
        })
    }   
}

// delete a To-do by id
const deleteTodo = async (req, res) => {
    // getting the id from the URL params
    const id = req.params.id

    // check if id is present
    if (!id) {
        return res.status(400).json({"Error": "The id parameter is required!"})
    }

    try {
        // find the todo and delete from the Todo collection
        await Todo.findByIdAndDelete(id)
        res.status(200).json({"Message": `The todo with ${id} was deleted successfully!`})
    } catch (error) {
        res.status(500).json({
            "Error" : error.message || `An error occured when deleting the todo with id ${id}`
        })
    }
}

module.exports = { getTodos, addTodo, updateTodo, deleteTodo }