
const express = require('express')
const app = express()
const http = require('http')


const port = 8000;

const server = http.Server(app)


const io = require('socket.io')(server)


io.on('connection', (client) => {
  console.log('CLIENT CONNECT')

  client.on('new-query', query => {
    console.log('A SOCKET ACTUALLY EMITTED ', query)
    client.broadcast.emit('new-query', query)
  })
  client.on('new-recommendation', rec => {
    client.broadcast.emit('new-recommendation', rec)
  })
  client.on('new-winner', winner=>{
    client.broadcast.emit('new-winner', winner)
  })




  client.on('subscribeToTimer', interval => {
    console.log('client is subscribing to timer with interval ', interval)
    setInterval(()=>{
      client.emit('timer', new Date())
    }, interval);
  })
})

server.listen(port)

//172.16.21.145