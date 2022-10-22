export default class SocketHandler {
  constructor(io) {
    this.io = io;
    this.ROOMS = new Map();
  }

  #generateRoomObject({ type, user, roomId }) {
    return {
      type: type || "fibonacci",
      users: [],
      votes: [],
      isVotesHidden: true,
      roomId
    }
  }

  #generateUserObject({ name, id }) {
    return {
      id,
      name,
      hasVoted: false,
      vote: null
    }
  }

  start() {
    this.io.on('connection', (socket) => {
      socket.on('join-room', info => {
        socket.join(info.room);
        console.log("logando tipo", info.type);

        if (!this.ROOMS.get(info.room)) {
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
          roomData: currentRoom,
          yourId: socket.id
        })

        socket.on("user-vote", data => {
          const { vote } = data;
          currentRoom.users = currentRoom.users.map(user => {
            if (user.id === socket.id) {
              return {
                ...user,
                hasVoted: vote !== null && vote !== user.vote,
                vote: vote !== user.vote? vote : null
              }
            }
            return user;
          })
          this.io.in(info.room).emit('sync-votes', {
            username: info.name,
            room: info.room,
            roomData: currentRoom
          })
        })

        socket.on("toggle-votes-visibility", data => {
          currentRoom.isVotesHidden = data;
          this.io.in(info.room).emit('sync-votes', {
            username: info.name,
            room: info.room,
            roomData: currentRoom
          })
        })

        socket.on("reset-room", () => {
          currentRoom.isVotesHidden = true;
          currentRoom.users = currentRoom.users.map(user => ({
            ...user,
            hasVoted: false,
            vote: null
          }))
          this.io.in(info.room).emit('sync-votes', {
            username: info.name,
            room: info.room,
            roomData: currentRoom
          })
        })

        socket.on('disconnect', () => {
          currentRoom.users = currentRoom.users.filter(user => socket.id !== user.id)
          this.io.in(info.room).emit('user-disconnected', {
            username: info.name,
            room: info.room,
            roomData: currentRoom
          })
          if(currentRoom.users.length === 0) {
            this.ROOMS.delete(info.room)
          }
        })
      })
    })
  }
}