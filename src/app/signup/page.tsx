import React from 'react'
import Image from 'next/image'

export default function Sign() {
  return (
    <div className='px-6 py-11 bg-white'>

      <div className='flex flex-row items-center'>

          <div className='w-full flex justify-center md:w-1/2 '>
              <Image 
                  src="/phone.png"
                  alt="phone pic"
                  height={300}
                  width={500}
                  />
          </div>

          <div className='w-full md:w-1/2 p-8'>
              <h2 className='font-bold text-2xl mb-7'>Create an account</h2>
              <p className='mb-4'>Enter your details below:</p>

              <form>
                  <div><input type="text" placeholder='Name' name='name' className='w-full border-b-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 px-4 py-2 mb-2'/></div>

                  <div><input type="email" placeholder='Email or Phone Number' className='w-full  border-b-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 px-4 py-2 mb-2'/></div>

                  <div><input type="password" placeholder='Password' className='w-full  border-b-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 px-4 py-2 mb-2'/></div>

                  <button className='w-full bg-red-600 text-white px-4 py-2 space-x-2 mb-2 font-bold tracking-wide'>Create Account</button>

                  <button className='w-full border border-gray-400 font-bold px-4 py-2 space-x-2 tracking-wide'>Sign Up With Google</button>
              </form>
          </div>

      </div>
      
    </div>
  )
}