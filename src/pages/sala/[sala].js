import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { getName } from "../../utils/username";
import { toast } from "react-toastify";
import io from "socket.io-client";
import Room from "../../common/components/elements/room";

export default function Sala() {

  const router = useRouter()

  useEffect(() => {
    console.log("quantas vez rodo");
    if(!router.isReady) return;
    const name = getName()
    const room = router.query.sala
    //socketInitializer(name, room)
  }, [router.isReady])

  const socketInitializer = async (name, room) => {
    console.log(name, room);
    
    await fetch('/api/socket')
    
    let socket = io()

    socket.emit("join-room", {
      room,
      name
    })

    socket.on('user-connected', (valor) => {
      console.log("usuario conectado", valor);
      toast.info(`O usuario ${valor.username} entrou na sala ${valor.room}`, {autoClose: 3000})
    })

    socket.on('user-disconnected', (valor) => {
      console.log("usuario desconectado", valor);
      toast.error(`O usuario ${valor.username} saiu da sala ${valor.room}`, {autoClose: 3000})
    })
  }

  return (
    <div className="min-w-fit h-screen p-8 bg-gradient-to-l from-blue-600 to-blue-900">
      <Room roomId={123456} />
    </div>
  )
}
