"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12 absolute bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo or Text */}
        <div className="text-lg font-semibold text-amber-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} MessMate. All rights reserved.
        </div>

        {/* Right Section - Links */}
        <ul className="flex space-x-6 text-sm text-gray-300">
          <li className="hover:text-amber-400 cursor-pointer hover:underline">Privacy</li>
          <li className="hover:text-amber-400 cursor-pointer hover:underline">Terms</li>
          <li className="hover:text-amber-400 cursor-pointer hover:underline">Support</li>
          <Link href="/"><li className="hover:text-amber-400 cursor-pointer hover:underline">Home</li></Link>
          <Link href="/about"><li className="hover:text-amber-400 cursor-pointer hover:underline">About</li></Link>
          <Link href="/contact"><li className="hover:text-amber-400 cursor-pointer hover:underline">Contact Us</li></Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
