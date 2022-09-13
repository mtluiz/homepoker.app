import {Server} from "socket.io";

const createdMessage = (msg) => {
      console.log("created message");
      socket.broadcast.emit("newIncomingMessage", msg);
};

export default function SocketHandler(req, res){
  if(res.socket.server.io) {
    res.end()
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket) => {
    socket.on("createdMessage", createdMessage);
  }

  io.on("connection", onConnection);

  res.end();
}