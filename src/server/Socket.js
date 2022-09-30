export default class SocketHandler{
  constructor(io){
    this.io = io;
    this.ROOMS = new Map();
  }

  #generateRoomObject({type, user, roomId}){
    return {
      type: type || "fibonacci",
      users: [],
      votes: [],
      isVotesHidden: true,
      roomId
    }
  }

  #generateUserObject({name, id}){
    return {
      
    }
  }

  start(){
    this.io.on('connection', (socket) => {
      console.log('connection', socket.id);

      socket.on('join-room', info => {
        socket.join(info.room);
        console.log("Usuario juntou a sala:", info);

        if(!ROOMS.get(info.room)){
          ROOMS.set(info.room, this.#generateRoomObject({
            type: info.type, 
            user: info.name, 
            roomId: info.room
          }))
        } 

        const currentRoom = ROOMS.get(info.room)
        currentRoom.users.push(info.name)

        this.io.in(info.room).emit('user-connected', {
          username: info.name, 
          room: info.room
        })

        socket.on('disconnect', () => {
          this.io.in(info.room).emit('user-disconnected', info)
          console.log('User disconnected!', info);
          //const userIndex = currentRoom.indexOf(info.name);
          //if(userIndex > -1) currentRoom.users.splice(userIndex, 1);
        })
      })
    })
  }
}