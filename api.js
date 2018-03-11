const openSocket = require('socket.io-client')
import store from './store'

const socket = openSocket('http://172.16.21.145:8000', {transports: ['websocket']} )

export const subscribeToTimer = (interval, cb) =>{
    socket.on('timer', timestamp => cb(null, timestamp))
    socket.emit('subscribeToTimer', interval)
}

socket.on('connection', ()=>{
    console.log('I CONNECTED TO SERVER')
} )

export default socket

////172.16.21.145