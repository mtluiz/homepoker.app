import { Server } from 'Socket.IO'

function geneterateRoomObject({type, user, roomId}){
  return {
    type: type || "fibonacci",
    users: [],
    votes: [],
    isVotesHidden: true,
    roomId
  }
}

const ROOMS = new Map();

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
        socket.join(info.room);

        if(!ROOMS.get(info.room)){
          ROOMS.set(info.room, geneterateRoomObject({type: info.type, user: info.name, roomId: info.room}))
        } 

        const currentRoom = ROOMS.get(info.room)

        currentRoom.users.push(info.name)

        console.log(currentRoom);

        socket.to(info.room).emit('user-connected', {username: info.name, room: info.room, roomObject: currentRoom})

        socket.on('disconnect', () => {
          console.log('disconnected!', info);
          const userIndex = currentRoom.indexOf(info.name);
          if(userIndex > -1) currentRoom.users.splice(userIndex, 1);
          socket.to(info.room).emit('user-disconnected', info)
        })

      })

    })

    res.socket.server.io = io
  }
  res.end()
}

export default SocketHandler