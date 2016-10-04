/**
 * Created by semianchuk on 04.10.16.
 */
//socket.io
var socketIo = require('socket.io')

module.exports = function(server){
    var io = socketIo(server)

    io.on('connection', socket => {
        socket.on('user', body => {
            var data = {};
            switch(body.id){
                case 1:
                    // socket for new register user
                    data = {id: body.id, text: 'Мы рады приветствовать нового юзера '+ body.data.username, title: 'New user'}
                    break;
                default:
                    data= body;

            }
            socket.broadcast.emit('user', {
                data
            })
        })
        socket.on('comment', body => {
            socket.broadcast.emit('comment', {
                body
            })
        })
    })
    return io;
}