const app = require('./app.js')
require('dotenv').config()
const port = process.env.PORT || PORT




 app.listen(port, () => console.log("server established @ " + port))

