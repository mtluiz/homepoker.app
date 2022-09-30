import { Server } from 'Socket.IO';
import SocketHandler from '../../server/Socket';

const SocketController = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')

    const io = new Server(res.socket.server)

    const Socket = new SocketHandler(io)

    Socket.start()

    res.socket.server.io = io
  }
  res.end()
}

export default SocketController