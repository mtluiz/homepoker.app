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
      id,
      name,
      hasVoted: false,
      vote: ''
    }
  }

  start(){
    this.io.on('connection', (socket) => {
      console.log('connection', socket.id);

      socket.on('join-room', info => {
        socket.join(info.room);
        console.log("Usuario juntou a sala:", info);

        if(!this.ROOMS.get(info.room)){
          this.ROOMS.set(info.room, this.#generateRoomObject({
            type: info.type, 
            user: info.name, 
            roomId: info.room
          }))
        } 

        const currentRoom = this.ROOMS.get(info.room)
        currentRoom.users.push(this.#generateUserObject({
            id: socket.id,
            name: info.name
        }))

        this.io.in(info.room).emit('user-connected', {
          username: info.name, 
          room: info.room,
          roomData: currentRoom
        })

        socket.on('disconnect', () => {
          console.log('User disconnected!', socket.id);
          console.log(currentRoom.users.filter(user => socket.id !== user.id))
          currentRoom.users = currentRoom.users.filter(user => socket.id !== user.id)
          this.io.in(info.room).emit('user-disconnected', {
            username: info.name, 
            room: info.room,
            roomData: currentRoom
          })
        })
      })
    })
  }
}