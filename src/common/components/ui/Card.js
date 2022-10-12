import React from 'react'
import CloseIcon from "../ui/CloseIcon"

export default function Card(props) {
  const { value, className, selected, closeClick } = props;

  return (
    <div className={`card hover:opacity-75 ${className}`} {...props}>
      {selected && <div onClick={closeClick} className='card-close-button'><CloseIcon /></div>}
      {value}
    </div>
  )
}
