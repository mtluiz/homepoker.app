import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)

    io.on('connect', (socket) => {

      socket.on("input-change", (msg) => {
        socket.broadcast.emit('update-input', msg)
      })

      socket.on("join-room", (roomId, username) => {
          socket.join(roomId)
          socket.to(roomId).emit("user-connected", username);
      })
    })

    res.socket.server.io = io
  }

  res.end()
}

export default SocketHandler