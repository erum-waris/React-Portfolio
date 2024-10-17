// src/app/components/Navbar.tsx
'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
      <div className=" flex justify-between items-center text-white ">
      <div className=" p-2 md:p-8 ml-7 ">
          <h1 className="font-bold text-4xl  md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-600 to-purple-500 hover:border-b-4 hover:border-yellow-300"> EW </h1>
          </div>

        {/* Desktop Menu */}
        
        <ul className="hidden md:flex gap-2 md:gap-6 text-white list-none font-semibold text-xl md:text-2xl mr-4 md:mr-10  ">
   <li className="hover:border-b-4 hover:border-yellow-300"><a href="/">Home</a></li>
   <li className="hover:border-b-4 hover:border-red-500"><a href="/about">About</a></li>
   <li className="hover:border-b-4 hover:border-gray-400"><a href="/projects">Projects</a></li>
   <li className="hover:border-b-4 hover:border-blue-500"><a href="/skills">Skills</a></li>
   <li className="hover:border-b-4 hover:border-pink-600"><a href="/contact ">Contact</a></li>
  </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-400 text-2xl mr-7">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
    

      {isOpen && (
      <ul className="md:hidden flex flex-col items-center mt-4 mr-5 m-2">
      <li className="hover:border-b-4 hover:border-yellow-300"><a href="/">Home</a></li>
      <li className="hover:border-b-4 hover:border-red-500"><a href="/about">About</a></li>
      <li className="hover:border-b-4 hover:border-gray-400"><a href="/projects">Projects</a></li>
      <li className="hover:border-b-4 hover:border-blue-500"><a href="/skills">Skills</a></li>
      <li className="hover:border-b-4 hover:border-pink-600"><a href="/contact ">Contact</a></li>
     </ul>
    )
}
</div>
    )
};

export default Navbar;

