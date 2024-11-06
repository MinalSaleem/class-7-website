import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <div className='bg-white px-6 py-11'>

      <div className='flex flex-row items-center'>

        <div className='h-96 divide-gray-300 divide-y-2 shadow-md shadow-slate-500'>
 
            <div className='py-9 pl-8'>
                <h2 className='font-bold text-xl pb-4 flex items-center'>
                <IoCallOutline color='white' className='bg-red-600 rounded-full'/>Call To Us</h2>
                <p className='pb-2'>We are available 24/7, 7 days a week.</p>
                <p>Phone No: +92 123 456789</p>
            </div>

            <div className='pl-8 py-9'>
              <h2 className='font-bold text-xl pb-4 flex items-center'>
              <MdOutlineMailOutline color='white'
              className='bg-red-600 rounded-full'/>
              Write To Us</h2>
              <p className='pb-2 pr-2'>Fill out our form and we will contact you within 24 hours.</p>
              <p className='pb-2'>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
        </div>

        <div className='h-96 ml-7 shadow-md shadow-slate-500'>

          <form className='pt-9 px-6'>

              <input type='text' placeholder='Your Name' name='name' required
              className='bg-gray-100 mr-4 py-3 pl-2 rounded-md'
              />
              <input type='email' placeholder='Your Email'
              name='email' required
              className='bg-gray-100 mr-4 py-3 pl-2 rounded-md'
              />
              <input type='number' placeholder='Your Phone' name='number' required
              className='bg-gray-100 py-3 pl-2 rounded-md'
              />
              <br />
              <textarea placeholder='Your Message'
              name='message' rows={6} cols={75}
              className='bg-gray-100 mt-7 pt-3 pl-2 rounded-md'
              ></textarea>

              <button className='w-60 bg-red-600 text-white py-4 px-5 mt-5 font-bold rounded-md'>Send Message</button>

          </form>
        </div>

        </div>
    </div>
  )
}
