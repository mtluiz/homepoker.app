
import React from 'react'
import Card from '../../ui/Card'

const fibonacciCards = [
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
  "PP",
  "P",
  "M",
  "G",
  "GG"
]

export default function VoteCards({ type, hasVoted, vote }) {
  return (
    <div className="votes h-1/4 min-h-1/4 gap-4 px-8 shadow-xl overflow-x-scroll flex items-center absolute w-full justify-center bg-white bottom-0 left-0">
      <Card value={<img src={"/images/thumbs-up.svg"} />} />
      <Card value={<img src={"/images/thumbs-down.svg"} />} />
      {
        type === "shirt" ?
          shirtSizeCards.map(size => (
            <Card key={size} value={size} />
          ))
          :
          fibonacciCards.map(size => (
            <Card key={size} value={size} />
          ))
      }
    </div>
  )
}
