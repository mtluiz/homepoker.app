import React, { useEffect } from 'react';

import useSelectedStore from '../../../store/selected';
import copyToClipboard from '../../../../utils/copyToClipboard';
import UserCard from '../../ui/UserCard';
import VoteCards from './VoteCards';

export default function Room({ roomId, roomSocketInfo, clickOnVoteCard, toggleVoteShow, resetRoom }) {

  const selectDefault = useSelectedStore((state) => state.selectDefault);

  useEffect(() => {
    console.log(roomSocketInfo.users);
  }, [roomSocketInfo])

  return (
    <div className="">

      <header className='flex justify-center'>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center absolute top-8 left-8" onClick={selectDefault}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z" />
          </svg>
          <span>Voltar</span>
        </button>

        <button className="bg-white hover:bg-blue-100 text-blue-600 font-bold py-2 px-4 rounded inline-flex items-center justify-center text-1xl" onClick={() => { copyToClipboard(roomId) }}>
          <span>Sala: {roomId}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clipboard m-2" viewBox="0 0 16 16">
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
          </svg>
        </button>

      </header>

      <div className='actions flex justify-center my-8 w-full gap-12'>
        <button className='text-1xl text-white border-solid shadow-xl bg-blue-600 hover:bg-blue-500 transition-all py-2 px-4 rounded inline-flex items-center' onClick={toggleVoteShow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye mr-2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          Mostrar Votos
        </button>

        <button className='text-1xl text-white border-solid shadow-xl bg-blue-600 hover:bg-blue-500 transition-all py-2 px-4 rounded inline-flex items-center' onClick={resetRoom}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-counterclockwise mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
          </svg>
          Resetar Sala
        </button>
      </div>

      <div className="users h-[260px]">
        {
          roomSocketInfo.users.map(user => (
            <UserCard key={user.id} name={user.name}>
              <h1>
                {
                  roomSocketInfo.isVotesHidden
                    ? user.hasVoted ? "Ja Votou!" : "Votando..."
                    : user.vote
                }
              </h1>
            </UserCard>
          ))
        }
      </div>


      <VoteCards clickOnCard={clickOnVoteCard} />
    </div>
  )
}
