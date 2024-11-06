import React from 'react';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className='bg-white'>

      <div className='bg-black flex justify-center h-9'>
        <p className= 'text-white pt-2'>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! <b>ShopNow</b></p>
      </div>

      <div className='ml-7 flex items-center justify-between px-6 py-4 border-b-2 border-gray-300 '>
        <div className='text-2xl font-bold tracking-wider'>Exclusive</div>

        <div>
          <Link href={'/'} className='mx-4 text-lg tracking-wide'>Home</Link>
          <Link href={'/contact'} className='mx-4 text-lg tracking-wide'>Contact</Link>
          <Link href={'/about'} className='mx-4 text-lg tracking-wide'>About</Link>
          <Link href={'/signup'} className='mx-4 text-lg tracking-wide'>Sign Up</Link>
        </div>

        <div className='flex items-center border-2 border-gray-300 bg-gray-300'>
          <input type='text' placeholder='What are you looking for' className='focus:outline-none focus:ring-gray-500 focus:ring-1 bg-slate-200 px-2'/><FaSearch/>
        </div>

      </div>


    </div>
  )
}
