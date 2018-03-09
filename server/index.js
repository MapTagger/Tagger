const express = require('express')
const http = require('http')
const app = express()
const server = http.Server(app)
//const server = app.listen(8080, ()=>{console.log('Server listening')})

server.listen(8080, () => console.log('listening on 8080'));
const io = require('socket.io')(server)


const wrapper = io => {
io.on('connection', socket=>{
    console.log(`A client just logged on socket`)
})
}

wrapper(io)