import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { getName, saveName } from '../../../../utils/username';

export default function CreateName() {

  const [name, setName] = useState(getName());

  const handleNameTyping = (e) => {
    saveName(name)
  }

  return (
    <>
      <h1 className='text-3xl text-center my-3 font-extralight'>Qual seu nome?</h1>

      <input 
        className="relative block px-3 py-2 border-2 border-gray-200 rounded-lg w-full text-lg focus:ring-0" 
        id="name" 
        onKeyUp={handleNameTyping} 
        type="text" 
        placeholder="Jeann Mallman" 
      />
    </>
  )
}
