import React from 'react';
import useSelectedStore from '../../../store/selected';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Welcome from "./Welcome";

const ScreenOptions = {
  "create": (<CreateRoom />),
  "join": (<JoinRoom />),
  "welcome": (<Welcome />)
}

export default function Home() {
  const selected = useSelectedStore((state) => state.selected)
  console.log(selected);
  return (
      <div className="px-4 py-32 mx-auto min-w-fit max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        {ScreenOptions[selected] || <Welcome />}
      </div>
  )
}
