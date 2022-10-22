import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Head from "next/head";
import { toast } from "react-toastify";
import io from "socket.io-client";

import { getName } from "../../utils/username";
import Room from "../../common/components/elements/room";
import Loader from "../../common/components/ui/Loader";

let socket;

export default function Sala() {

  const router = useRouter()

  const [roomInfo, setRoomInfo] = useState(null)

  useEffect(() => {
    if (!router.isReady) return;
    const name = getName()
    const room = router.query.sala
    const type = router.query.type
    
    localStorage.openpages = Date.now();
    var onLocalStorageEvent = function (e) {
      console.log(e.key);
      if (e.key == "openpages") {
        localStorage.page_available = Date.now();
      }
      if (e.key == "page_available") {
        window.location.assign("/error")
      }
    };
    window.addEventListener('storage', onLocalStorageEvent, false);
    if(!getName()){
      window.location.assign(`/name?sala${room}`)
    }
    socketInitializer(name, room, type)
  }, [router.isReady])

  const socketInitializer = async (name, room, type) => {
    await fetch('/api/socket')

    socket = io()

    socket.emit("join-room", {
      room,
      name,
      type
    })

    socket.on('user-connected', (valor) => {
      toast.info(`O usuario ${valor.username} entrou na sala ${valor.room}`, { autoClose: 3000 })
      setRoomInfo(valor.roomData)
    })

    socket.on("sync-votes", valor => {
      setRoomInfo(valor.roomData)
    })

    socket.on('user-disconnected', (valor) => {
      toast.error(`O usuario ${valor.username} saiu da sala ${valor.room}`, { autoClose: 3000 })
      setRoomInfo(valor.roomData)
    })
  }

  let clickOnVote = (value) => {
    socket.emit("user-vote", {
      vote: value
    })
  }

  const toggleVoteShow = () => {
    socket.emit("toggle-votes-visibility", !roomInfo.isVotesHidden)
  }

  const resetRoom = () => {
    socket.emit("reset-room", "reset-room")
  }

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <title>{router.query.sala && `Sala ${router.query.sala}` || "Carregando"}</title>
      </Head>
      <div className="min-w-fit h-screen p-8 bg-gradient-to-l from-blue-600 to-blue-900">
        {
          roomInfo
            ? <Room
              roomId={router.query.sala}
              roomSocketInfo={roomInfo}
              clickOnVoteCard={clickOnVote}
              toggleVoteShow={toggleVoteShow}
              resetRoom={resetRoom}
            />
            : <Loader />
        }
      </div>
    </>
  )
}
