// dependencies 
const express = require('express')

// initializing the express Router
const router = express.Router()

// routes
router.get('', (req, res) => {
    try {
        res.status(200).json({"Message": "Welcome to my To-do API. Navigate to: /api/todos"})
    } catch (error) {
        res.status(400).json({"Error": `An error occured - ${error.message}`})
    }
})

// exporting the router
module.exports = router