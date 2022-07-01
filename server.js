//  dependencies
const express = require('express')
const connectDB = require('./connection/connectDB')

// import routes
const homeRoute = require('./routes/homeRoute')
const todoRoutes = require('./routes/todoRoutes')

//  initializing the app
const app = express()

// connect to DB
connectDB()

// app utilities
app.use(express.json())
app.use('/', homeRoute)
app.use('/api/todos', todoRoutes)
app.use('*', (req, res) => { res.status(400).json({"Error": "😢 The route are looking for does not exist!"}) })

// server setup
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`⚡ [server]: server is listening on port ${PORT}....`)
})