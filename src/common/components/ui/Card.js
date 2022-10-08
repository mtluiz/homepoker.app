import React from 'react'

export default function Card(props) {
  const {value} = props;
  return (
    <div className='card hover:opacity-75' {...props}>
      {value}
    </div>
  )
}
