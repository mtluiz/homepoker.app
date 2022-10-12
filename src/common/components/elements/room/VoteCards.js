
import React, { useState } from 'react'
import Image from 'next/image'

import Card from '../../ui/Card'

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

  const handleCardClick = (size) => (element) => {
    clickOnCard(size);
    setVoted(size);
    document.getElementById("sound-click").load();
    document.getElementById("sound-click").volume = 0.1;
    document.getElementById("sound-click").play();
  }

  return (
    <div className="votes h-1/4 cursor-pointer p-10 gap-4 shadow-xl overflow-x-scroll overflow-y-hidden flex items-center absolute w-full bg-white bottom-0 left-0">
      <Card
        value={<Image width={80} height={80} src={"/images/thumbs-up.svg"} alt="" />}
        onClick={handleCardClick("thumbs-up")}
        selected={voted === "thumbs-up"}
      />
      <Card
        value={<Image width={80} height={80} src={"/images/thumbs-down.svg"} alt="" />}
        onClick={handleCardClick("thumbs-down")}
        selected={voted === "thumbs-down"}
      />
      {
        type === "shirt" ?
          shirtSizeCards.map(size => (
            <Card
              key={size}
              onClick={handleCardClick(size)}
              value={size}
              selected={voted === size}
            />
          ))
          :
          fibonacciCards.map(size => (
            <Card
              key={size}
              onClick={handleCardClick(size)}
              value={size}
              selected={voted === size}
            />
          ))
      }
    </div>
  )
}
