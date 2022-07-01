// dependencies
const { connect } = require('mongoose')
const { config } = require('dotenv')

// read env variables
config({path: './.env'})

// connect to database functionality
const connectDB = async() => {
    try{
        await connect(process.env.MONGO_URI)
        console.log(`💾 [database]: database connection successful.... `)
    } catch (error) {
        console.log(`😢 [database]: database connection unsuccessful.... `)
    }
}

// export the connectDB function
module.exports = connectDB