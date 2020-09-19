const express = require('express')
const server = express()
const mongoose = require('mongoose')

// to format requests into JSON
server.use(express.json())

// to correctly get the information from submissions
server.use(express.urlencoded({ extended: false }))

const articleRouter = require('./article/router')

server.use('/articles', articleRouter)

// connect to the database
mongoose.connect(`mongodb://localhost:27017/simple-mern-blog`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// open the connection
const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB connection established."))

const PORT = process.env.port || 4000
server.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))