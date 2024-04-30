const http = require('http')
const port = 3000
const app = require('../api/app')

const server = http.createServer(app)
server.listen(port,()=>{
    console.log("app is running in port 3000")
})


