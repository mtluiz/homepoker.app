import React from 'react'
import useSelectedStore from '../../../store/selected'

export default function Welcome() {

  const {selectCreate, selectJoin, selectDefault} = useSelectedStore((state) => state)
  console.log(selectCreate);


  return (
    <div className="max-w-xl mx-auto text-center">
      
      <h1 className="text-3xl font-bold sm:text-5xl logo">
        homepoker.app
      </h1>

      <p className="mt-4 sm:leading-relaxed sm:text-xl">
        Agile poker em qualquer lugar!
      </p>

      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <a className="block w-full px-12 py-3 text-lg font-medium text-white bg-blue-600 rounded shadow sm:w-auto active:bg-blue-500 transition-all hover:bg-blue-700 focus:outline-none focus:ring" onClick={selectCreate}>
          Criar sala
        </a>

        <a className="block w-full px-12 py-3 text-lg font-medium text-blue-600 rounded shadow sm:w-auto hover:text-blue-400 transition-all active:text-blue-500 focus:outline-none focus:ring" onClick={selectJoin}>
          Juntar-me a uma sala
        </a>
      </div>
    </div>
  )
}
