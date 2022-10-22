import React from 'react'
import Image from 'next/image';

export default function VoteParser({ users }) {

  const userVotes = users.filter(user => user.hasVoted);
  const userVotesSet = Array.from(new Set(userVotes.map(user => user.vote)))
  const segregatedUserVotes = userVotesSet.map(vote => {
    return {
      vote: vote,
      users: userVotes.filter(user => user.vote === vote)
    }
  })

  const checkThumbsUp = (vote) => {
    if(vote === "thumbs-up"){
      return <Image width={80} height={80} src={"/images/thumbs-up.svg"} alt="" />
    } else if(vote === "thumbs-down"){
      return <Image width={80} height={80} src={"/images/thumbs-down.svg"} alt="" />
    } else{
      return false
    }
  }

  return (
    <div className='flex'>
      {segregatedUserVotes.map(voteData => (
        <div className='mx-4' key={voteData.vote}>
          <div className='flex justify-center align-center mx-4'>
            {voteData.users.map(user => (
              <div className='card card-voteparser' key={user.id}>
                {checkThumbsUp(voteData.vote) || voteData.vote}
              </div>
            ))}
          </div>
          <p className='mt-4'>
            {voteData.users.length}x: {voteData.users.map(u => u.name).join(",")}
          </p>
        </div>
      ))}
    </div>
  )
}
