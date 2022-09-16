import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import io from "socket.io-client" 

let socket;


export default function Sala() {

  const {sala} = useRouter().query
  console.log(sala);

  const [input, setInput] = useState('')

  useEffect(() => {socketInitializer()}, [])

  const socketInitializer = async () => {
    await fetch('/api/socket2')
    socket = io()
    socket.emit("join-room", sala, "caralho")

    socket.on('user-connected', (valor) => {
      console.log("valor " + valor);
    })


  }

  
  return (
    <div>Sala {sala}
      <button>sla porra</button>
    </div>
  )
}
