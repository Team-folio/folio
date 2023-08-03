"use client"; 
import { useState } from "react"
import Link from "next/link";

import { FiMenu } from "react-icons/fi";

import Search from './Search'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="fixed bg-white h-14 w-full shadow-md  px-2 py-2 md:px-4 ">
      <div className="flex items-center justify-between ">
        {/**<BeakerIcon className="h-6 w-6 text-blue-500" />*/}
        <div className="flex items-center md:gap-5 gap-2">
          <Link href="/" className="h-10 flex items-center ">
            Logo
          </Link>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center md:gap-10 font-semibold">
            <Link href="/jobs" className="text-black hover:underline">
              Jobs
            </Link>
            <Link href="/projects" className="text-black hover:underline">
              Projects
            </Link>
            <Link href="/about" className="text-black hover:underline">
              About
            </Link>
          </nav>
          {/* Search Input */}

          <Search />
        </div>

        {/* Sign In and Sign Up */}
        <nav className="hidden md:flex items-center gap-8 ml-4 font-semibold px-5">
          <Link href="/signin" className="text-black hover:underline">
            Sign In
          </Link>

          <Link
            href="/signup"
            className="text-white bg-black rounded-lg  px-2 py-1 hover:underline">
            Sign Up
          </Link>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden absolute top-4 right-1">
        <FiMenu
          className="text-black cursor-pointer text-xl"
          onClick={handleMenuToggle}
        />
      </div>
      {showMenu && (
        <div className="md:hidden bg-white font-semibold text-right mt-4">
          <Link href="/jobs" className="block text-black mt-2 ">
            Jobs
          </Link>
          <Link href="/projects" className="block text-black mt-2 ">
            Projects
          </Link>
          <Link href="/about" className="block text-black mt-2 ">
            About
          </Link>
          <Link href="/signin" className="block text-black mt-2 ">
            Sign In
          </Link>
          <Link href="/signup" className="block text-black mt-2 ">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
