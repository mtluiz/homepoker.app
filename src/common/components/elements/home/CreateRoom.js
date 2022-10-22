import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CreateName from '../name/CreateName'
import useSelectedStore from '../../../store/selected'
import createRandomNumber from '../../../../utils/createRandomNumber'

export default function CreateRoom() {

  const [selectedType, setSelectedType] = useState("fibonacci")

  const selectDefault = useSelectedStore((state) => state.selectDefault)

  return (
    <div>

      <CreateName />

      <div className="cards flex justify-around my-6">
        <div className={`card cursor-pointer ${selectedType === "fibonacci" ? "border-solid border-8 border-fuchsia-500" : ""}`} onClick={() => setSelectedType("fibonacci")}>13</div>
        <div className={`card cursor-pointer ${selectedType === "shirt" ? "border-solid border-8 border-fuchsia-500" : ""}`} onClick={() => setSelectedType("shirt")}>
          <Image width={80} height={80} src="/images/shirt.svg" alt="shirt" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <a className="block w-full px-6 py-3 text-lg font-medium cursor-pointer text-blue-600 rounded shadow sm:w-auto hover:text-blue-400 transition-all active:text-blue-500 focus:outline-none focus:ring" onClick={selectDefault}>
          Voltar
        </a>
        <Link href={`/sala/${createRandomNumber()}?type=${selectedType}`}>
          <a className="block w-full px-6 py-3 text-lg font-medium cursor-pointer text-white bg-blue-600 rounded shadow sm:w-auto active:bg-blue-500 transition-all hover:bg-blue-700 focus:outline-none focus:ring">
            Criar sala
          </a>
        </Link>
      </div>
    </div>
  )
}
