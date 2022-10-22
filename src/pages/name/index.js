/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
const CreateName = dynamic(() => import('../../common/components/elements/name/CreateName'), { ssr: false })

export default function Name() {

  const router = useRouter()

  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      {router.isReady && (
        <div>
        <CreateName />
        <a href={`/sala/${router.query.sala}`} className="block mt-4 w-full px-12 py-3 text-lg font-medium text-blue-600 rounded shadow sm:w-auto hover:text-blue-400 transition-all active:text-blue-500 focus:outline-none focus:ring cursor-pointer">
          Juntar-me a sala {router.query.sala}
        </a>
      </div>
      )}
    </div>
  )
}
