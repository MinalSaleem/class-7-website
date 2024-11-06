import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className='px-6 py-11 bg-white'>

        <div className='flex flex-row items-center'>

            <div className='w-full p-8'>
                <h2 className='font-bold text-4xl mb-5'>Our Story</h2>
                <p className='mb-3'>Launched in 2015,Exclusive is South Asia premier online shopping marketplace with an active presence in Bangladesh, Supportes by wide range of tailorrd marketing,data and service solutions,Exclusive has 10,500 sallers and 300 brands and serves 3 millions customers across the region</p>                                            <p>Exclusive has more than 1 Million products to offer, growing ata very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
            </div>

            <div className='w-full flex justify-center'>
                <Image
                src="/pic.jpg"
                alt='Shopping Pic'
                width={600}
                height={300}
                />
            </div>

        </div>


        <div className='flex justify-evenly mt-72'>

            <div className='border-gray-300 border-solid border-2'>
              <Image
                src="/1.jpg"
                alt="picture"
                width={300}
                height={300}
              />
              <h2 className='tracking-wide font-bold text-2xl pt-5 pl-2'>Sophia</h2>
              <p className='pl-2 pb-1'>Founder and Chaiman</p>
            </div>

            <div className='border-solid border-2 border-gray-300'>
              <Image
                src="/2.jpg"
                alt="picture"
                width={300}
                height={300}
              />
              <h2 className='font-bold text-2xl tracking-wide pt-5 pl-2'>Emma</h2>
              <p className='pl-2 pb-1'>Managing Director</p>
            </div>

            <div className='border-solid border-gray-300 border-2'>
              <Image
                src="/3.jpg"
                alt="picture"
                width={300}
                height={300}
              />
              <h2 className='font-bold text-2xl tracking-wide pt-5 pl-2'>Amelia</h2>
              <p className='pl-2 pb-1'>Product Designer</p>
            </div>

          </div>

          <div></div>

    </div>
  )
}
