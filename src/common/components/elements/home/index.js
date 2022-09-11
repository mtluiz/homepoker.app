import React from 'react';
import CreateRoom from './CreateRoom';

export default function Home() {
  return (
      <div className="px-4 py-32 mx-auto min-w-fit max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <CreateRoom></CreateRoom>
      </div>
  )
}
