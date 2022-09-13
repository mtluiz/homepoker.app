import React from 'react'

export default function CreateRoom() {
  return (
    <div>
      <h1 className='text-3xl text-center my-3'>Qual seu nome?</h1>
      <input class="relative block px-3 py-2 border-2 border-gray-200 rounded-lg w-full text-lg focus:ring-0" id="name" type="text" placeholder="John Doe" />

      <div className="cards flex justify-around my-6">
        <div className="card">13</div>
        <div className="card">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <a className="block w-full px-6 py-3 text-lg font-medium text-blue-600 rounded shadow sm:w-auto hover:text-blue-400 transition-all active:text-blue-500 focus:outline-none focus:ring" href="/about">
          Voltar
        </a>

        <a className="block w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded shadow sm:w-auto active:bg-blue-500 transition-all hover:bg-blue-700 focus:outline-none focus:ring" href="/get-started">
          Criar sala
        </a>
      </div>
    </div>
  )
}
