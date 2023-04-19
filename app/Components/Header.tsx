import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
    <div className='flex justify-around items-center text-2xl py-6 bg-blue-200 text-gray-800 font-bold'>
        <Link href={""}>Home</Link>
        <Link href={""}>Blogs</Link>
    </div>
    </>
  )
}
