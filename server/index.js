const express = require('express')
const cors = require('cors')
const colors = require('colors')
require('dotenv').config()
const port = process.env.PORT || 5000
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const app = express()

app.use(cors())

//Connect to MongoDB Database
connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port:${port}`))