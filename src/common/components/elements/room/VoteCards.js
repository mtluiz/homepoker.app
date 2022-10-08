
import React from 'react'
import Image from 'next/image'

import Card from '../../ui/Card'
import { useState } from 'react'

const fibonacciCards = [
  "?",
  "0",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "20",
  "40",
  "99"
]

const shirtSizeCards = [
  "?",
  "PP",
  "P",
  "M",
  "G",
  "GG"
]

export default function VoteCards({ type, hasVoted, vote, clickOnCard, selected }) {

  const [voted, setVoted] = useState(null);

  return (
    <div className="votes h-1/4 min-h-1/4 cursor-pointer px-10 gap-4 shadow-xl overflow-x-scroll flex items-center absolute w-full bg-white bottom-0 left-0">
      <Card value={<Image width={80} height={80} src={"/images/thumbs-up.svg"} onClick={() => {clickOnCard("thumbs-up");}} alt="" />} />
      <Card value={<Image width={80} height={80} src={"/images/thumbs-down.svg"} onClick={() => {clickOnCard("thumbs-down");}} alt="" />} />
      {
        type === "shirt" ?
          shirtSizeCards.map(size => (
            <Card key={size} onClick={(event) => {clickOnCard(size);setVoted(size)}} value={size} />
          ))
          :
          fibonacciCards.map(size => (
            <Card key={size} onClick={(event) => {clickOnCard(size);setVoted(size)}} value={size} />
          ))
      }
    </div>
  )
}
