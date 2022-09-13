import { useEffect, useState } from "react"
import io from "socket.io-client" 

let socket;


export default function Sala({sala}) {
  const [input, setInput] = useState('')

  useEffect(() => {socketInitializer(); console.log("give a fuck");}, [])

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    console.log(socket);
    socket.emit('input-change', e.target.value)
  }

  const socketInitializer = async () => {
    await fetch('/api/socket2')
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-input', msg => {
      setInput(msg)
    })
  }

  
  return (
    <div>Sala {sala}

    <div>
    <input
    placeholder="Type something"
    value={input}
    onChange={onChangeHandler}
  />
    </div>
    
    </div>
  )
}
