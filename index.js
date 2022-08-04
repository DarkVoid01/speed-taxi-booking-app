const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./api/routes/userRoute.js')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require('./api/db/db').connect()
app.use('/api/v1', route)

app.use(cors())
const port = process.env.PORT || 5000




 app.listen(port, () => console.log("server established @ " + port))

