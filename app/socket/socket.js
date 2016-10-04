/**
 * Created by semianchuk on 04.10.16.
 */
//socket.io
var socketIo = require('socket.io')

module.exports = function(server){
    var io = socketIo(server)

    io.on('connection', socket => {
        socket.on('message', body => {
            socket.broadcast.emit('message', {
                body
            })
        })
    })
    return io;
}