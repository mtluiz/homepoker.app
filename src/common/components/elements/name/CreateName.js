import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { saveName } from '../../../../utils/username';

export default function CreateName() {

  const [name, setName] = useState("");

  const handleNameTyping = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    saveName(name)
  }, [name])

  return (
    <>
      <h1 className='text-3xl text-center my-3 font-extralight'>Qual seu nome?</h1>

      <input 
        className="relative block px-3 py-2 border-2 border-gray-200 rounded-lg w-full text-lg focus:ring-0" 
        id="name" 
        value={name} 
        onChange={handleNameTyping} 
        type="text" 
        placeholder="John Doe" 
      />
    </>
  )
}
