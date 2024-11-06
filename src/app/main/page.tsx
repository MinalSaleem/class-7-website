import Image from "next/image";
import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";

export default function Main() {
  return (
    <div className="px-6 pt-20 pb-40 bg-white divide-y-2 divide-gray-300">

        <div className="flex flex-row mb-20">
            <div className="mr-16 ml-12 pr-6">
            <ul className="flex flex-col gap-3">
                <li>Woman Fashion</li>
                <li>Men Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyles</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
            </div>
            <div className="ml-14">
            <Image
                src="/main1.jpg"
                alt="Phone picture"
                width={900}
                height={300}
            />
            </div>
        </div>

        <div className="mt-10">
            <h3 className="text-red-600 text-xl font-bold pt-10 px-5">Today</h3>
            <h2 className="text-4xl font-semibold px-5 py-5 tracking-wide">
            Flash Sales
            </h2>
            <div className="flex flex-row justify-around">
            <Image src="/sale1.jpg" alt="Gamepad" width={300} height={300} />
            <Image src="/sale2.jpg" alt="Keyboard" width={300} height={300} />
            <Image src="/sale3.jpg" alt="Monitor" width={300} height={300} />
            <Image src="/sale4.jpg" alt="Chair" width={300} height={300} />
            </div>
            <div className="flex justify-center my-10">
            <button className="bg-red-600 text-white py-3 px-16 rounded-lg ">
                View All Products
            </button>
            </div>
        </div>

        <div className="mt-10">
            <h3 className="text-red-600 text-xl font-bold pt-10 px-5">
            Categories
            </h3>
            <h2 className="text-4xl font-semibold px-5 py-5 tracking-wide">
            Browse By Category
            </h2>
            <div className="flex flex-row justify-evenly">
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <IoIosPhonePortrait size={70} />
                <p>Phone</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <RiComputerLine size={70} />
                <p>Computer</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <BsSmartwatch size={70} />
                <p>Smartwatch</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <BsCamera size={70} />
                <p>Camera</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <FiHeadphones size={70} />
                <p>Headphones</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <IoGameControllerOutline size={70} />
                <p>Gaming</p>
            </div>
            </div>
        </div>

        <div className="my-10">
            <h3 className="text-red-600 text-xl font-bold pt-10 px-5">This Month</h3>
            <div className="flex justify-between">
            <h2 className="text-4xl font-semibold px-5 py-2 tracking-wide">Best Selling Products</h2>
            <button className="bg-red-600 text-white py-3 px-14 rounded-lg mr-4">
                View All
            </button>
            </div>
            <div className="flex flex-row justify-around">
            <Image src="/best1.jpg" alt="Coat" width={300} height={300} />
            <Image src="/best2.jpg" alt="Bag" width={300} height={300} />
            <Image src="/best3.jpg" alt="CPU" width={300} height={300} />
            <Image src="/best4.jpg" alt="BookShelf" width={300} height={300} />
            </div>
        </div>

        <div className="my-10">
            <div className="flex justify-center py-10">
            <Image src="/main2.jpg" alt="Phone picture" width={1100} height={300}
            />
            </div>
        </div>

        <div className="mt-10">
            <h3 className="text-red-600 text-xl font-bold pt-10 px-5">Our Products</h3>
            <h2 className="text-4xl font-semibold px-5 py-5 tracking-wide">
            Explore Our Products
            </h2>
            <div className="grid grid-cols-4 gap-10 content-around px-5">
            <Image src="/explore1.jpg" alt="Dogfood" width={250} height={300} />
            <Image src="/explore2.jpg" alt="Camera" width={250} height={300} />
            <Image src="/explore3.jpg" alt="Laptop" width={250} height={300} />
            <Image src="/explore4.jpg" alt="ProductSet" width={250} height={300} />
            <Image src="/explore5.jpg" alt="KidsCar" width={250} height={300} />
            <Image src="/explore6.jpg" alt="Soccer" width={250} height={300} />
            <Image src="/explore7.jpg" alt="Gamepad" width={250} height={300} />
            <Image src="/explore8.jpg" alt="Jacket" width={250} height={300} />
            </div>
            <div className="flex justify-center my-10">
            <button className="bg-red-600 text-white py-3 px-16 rounded-lg ">
                View All Products
            </button>
            </div>
        </div>

        <div className="mt-10">
            <h3 className="text-red-600 text-xl font-bold pt-10 px-5">Featured</h3>
            <h2 className="text-4xl font-semibold px-5 py-5 tracking-wide">
            New Arrival
            </h2>
            <div className="flex flex-row justify-center gap-7">
                <Image src="/arrival1.jpg" alt="Playstation" width={600} height={300} />
                <div className="flex flex-col gap-6">
                <Image src="/arrival2.jpg" alt="Collection" width={620} height={300} />
                    <div className="flex flex-row gap-6">
                        <Image src="/arrival3.jpg" alt="Speaker" width={300} height={300} />
                        <Image src="/arrival4.png" alt="Perfume" width={300} height={300} />
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}
