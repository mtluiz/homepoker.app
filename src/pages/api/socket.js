import { Server } from 'socket.io';
import SocketHandler from '../../services/SocketHandler';

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