"use client"

import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

export function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
 
      <nav className="w-full sticky top-0 left-0 right-0 bg-white z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-6xl lg:items-center lg:flex lg:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
              <picture>
        <img src="./logo.png" alt="" className="" />
      </picture>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-blue-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                  <IoCloseSharp size={30} className='text-blue-400'/>

                  ) : (
                  <BiMenu size={30} className='text-blue-400'/>

                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 border-blue-400 hover:text-blue-400 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 border-blue-400 hover:text-blue-400 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Sobre
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 border-blue-400 hover:text-blue-400 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Serviços
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 border-blue-400 hover:text-blue-400 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Portfólio
                  </Link>
                </li>
                <li className="text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 border-blue-400 hover:text-blue-400 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Contato
                  </Link>
                </li>
                <li className="block lg:hidden text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 border-blue-400 hover:text-blue-400 md:hover:bg-transparent">
                  <Link href="#projects" className='flex items-center justify-center gap-1' onClick={() => setNavbar(!navbar)}>
                  <FaWhatsapp className='text-green-500 cursor-pointer hover:text-base' size={25} /> (11) 99999-9999
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='hidden lg:block'>
          <a className='flex gap-1 text-xl items-center py-2 md:px-6 text-center justify-center cursor-pointer' href="https://wa.me/+5511997760614" target='_blank' rel="noreferrer"><FaWhatsapp className='text-green-500 cursor-pointer hover:text-base' size={25} /> (11) 99999-9999</a>
          </div>
        </div>
      </nav>
  
  );
}

