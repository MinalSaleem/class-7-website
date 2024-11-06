import React from 'react';
import { FaRegCopyright } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";


export default function Footer() {
  return (
    <div>
        <div className='bg-black text-white divide-y divide-gray-600'>

            <div className='flex flex-row justify-evenly py-12'>


                <div>
                    <h3 className='text-2xl font-bold pb-5'>Exclusive</h3>
                    <ul className='flex flex-col gap-3'>
                        <li>Subsribe</li>
                        <li>Get 10% off your first order</li>
                        <button className='text-start'>Enter your email</button>
                    </ul>
                </div>

                <div>
                    <h3 className='text-xl pb-5'>Support</h3>
                    <ul className='flex flex-col gap-3'>
                        <li>abc road, Karachi, Pakistan</li>
                        <li>exclusive@gmail.com</li>
                        <li>+92 123 4556789</li>
                        </ul>
                </div>

                <div>
                    <h3 className='text-xl pb-5'>Account</h3>
                    <ul className='flex flex-col gap-3'>
                    <li>My Accout</li>
                    <li>Login/Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-xl pb-5'>Quick Link</h3>
                    <ul className='flex flex-col gap-3'>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-xl pb-5'>Download App</h3>
                    <p className='py-3'>5% off with App User Only</p>
                    <div className='px-14'>
                        <BsQrCode 
                        size={56} />
                    </div>
                    <div className='flex justify-evenly pt-3'>
                        <BiLogoFacebook size={28} />
                        <FiTwitter size={28} />
                        <FaInstagram size={28} />
                        <RiLinkedinLine size={28} />
                    </div>
                </div>


            </div>

            <div className='flex items-center space-x-2 justify-center py-3 text-gray-600'>
                <FaRegCopyright /><p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    </div>
  )
}
