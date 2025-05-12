
"use client";

import React, { useState } from 'react';
import { Menu, X,Search  } from 'lucide-react'; // npm install lucide-react (optional for icons)
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[search,setSearch]=useState("")

  const handleSearch=()=>{
console.log("Search for:"+search)

setSearch('');


  }

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        {/* <Link href="/"><div className="text-2xl font-bold text-amber-500">MessMate</div></Link> */}
  <Link href="/">
      
        <Image src="/messmatelogo.png" alt="MessMate Logo" width={95} height={95} />
      
    </Link>

      <div className="relative w-full max-w-md flex items-center">
      {/* Icon inside the input */}
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
        <Search size={18} />
      </span>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
      />

      {/* Search Button */}
      <button onClick={handleSearch} className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-3 rounded-r-xl transition-colors">
        <Search size={18} />
      </button>
    </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href={"/"}><li className="hover:text-amber-500 cursor-pointer hover:text-2xl text-red-500">Home</li></Link>
          <Link href={"/about"}><li className="hover:text-amber-500 cursor-pointer hover:text-2xl">About</li></Link>
          <Link href={"/contact"}><li className="hover:text-amber-500 cursor-pointer hover:text-2xl text-red-500">Contact</li></Link>
        </ul>



        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <li className="hover:text-amber-500 cursor-pointer hover:text-2xl text-red-500">Home</li>
          <li className="hover:text-amber-500 cursor-pointer hover:text-2xl">About</li>
          <li className="hover:text-amber-500 cursor-pointer hover:text-2xl text-red-500">Contact</li>
        </ul>
      )}
    </nav>
  );

};
export default Navbar;
