// dependencies 
const express = require('express')
const { getTodos, addTodo, updateTodo, deleteTodo } = require('../controllers/todoControllers')

// initializing the express Router
const router = express.Router()

// routes
router.get('', getTodos)
router.post('/add', addTodo)
router.put('/update/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)

// exporting the router
module.exports = router