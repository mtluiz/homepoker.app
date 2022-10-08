import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import io from "socket.io-client";

import { getName } from "../../utils/username";
import Room from "../../common/components/elements/room";

let socket;

export default function Sala() {

  const router = useRouter()

  const [roomInfo, setRoomInfo] = useState(null)

  useEffect(() => {
    if (!router.isReady) return;
    const name = getName()
    const room = router.query.sala
    socketInitializer(name, room)
  }, [router.isReady])

  useEffect(() => {
    console.log(roomInfo);
  }, [roomInfo])

  let clickOnVote = (value) => {
    console.log("votou");
    socket.emit("user-vote",{
      vote: value
    })
  }

  const socketInitializer = async (name, room) => {
    console.log("CLIENT", name, room);

    await fetch('/api/socket')

    socket = io()

    socket.emit("join-room", {
      room,
      name
    })

    socket.on('user-connected', (valor) => {
      console.log("SERVER", valor);
      toast.info(`O usuario ${valor.username} entrou na sala ${valor.room}`, { autoClose: 3000 })
      setRoomInfo(valor.roomData)
    })

    socket.on("sync-votes", valor => {
      console.log(valor);
      setRoomInfo(valor.roomData)
    })

    socket.on('user-disconnected', (valor) => {
      toast.error(`O usuario ${valor.username} saiu da sala ${valor.room}`, { autoClose: 3000 })
      console.log("usuario desconectado", valor);
      setRoomInfo(valor.roomData)
    })
  }

  return (
    <div className="min-w-fit h-screen p-8 bg-gradient-to-l from-blue-600 to-blue-900">
      {roomInfo ? <Room roomId={router.query.sala} roomSocketInfo={roomInfo} clickOnVoteCard={clickOnVote} /> : "Loading"}
    </div>
  )
}
