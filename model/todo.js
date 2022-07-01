// dependencies
const mongoose = require('mongoose')

//  defining a To-do Schema
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

// defining the model to export 
const model = mongoose.model('Todo', TodoSchema)

// export the model
module.exports = model

