const express = require('express')
const app = express()
// require('dotenv').config()
const cors = require('cors')

app.use('/', (req, res) => 'Welcome!!')


module.exports = app

// app.use(express.json())
// app.use(express.urlencoded({ extended: true}))