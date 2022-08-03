const express = require('express')
const app = express()
// require('dotenv').config()
const cors = require('cors') //allows the end points to be used across the browser
const route = require('./api/routes/userRoute')
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
require('./api/db/db').connect()



app.get('/', (req, res) => {
    return res.json({
        status: "Success",
        message: "Welcome to CRUDApp"
    })
})
app.use('/api/v1', route)

app.use(cors())
module.exports = app
