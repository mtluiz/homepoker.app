import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')

    const io = new Server(res.socket.server)

    io.on('connection', (socket) => {
      console.log('connection', socket.id);

      socket.on('join-room', info => {
        console.log("junta sala", info);
        socket.join(info.room)
        socket.to(info.room).emit('user-connected', {username: info.name, room: info.room})

        socket.on('disconnect', () => {
          console.log('disconnected!', info);
          socket.to(info.room).emit('user-disconnected', info)
        })

      })

    })

    res.socket.server.io = io
  }
  res.end()
}

export default SocketHandler