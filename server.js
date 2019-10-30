const http = require('http')
const app = require('./index')

const port = process.env.PORT || 5432

const server = http.createServer(app)
server.listen(port, () => console.log(`Server started at ${port}`))