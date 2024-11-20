'use client'
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const links = [
    { linkName: "Pool of Radiance", href: "/poolofradiance" },
    {
      linkName: "Curse of the Azure Bonds",
      href: "/azurebonds",
    },
    { linkName: "Secret of the Silver Blades", href: "/silverblades" },
    {linkName: "Pools of Darkness", href: "/poolsofdarkness"},
    {linkName: "Binary Tool", href:"/binarytool"},
    {linkName: "About", href: "/about"},

    {linkName: "robotlions.com", href:"https://robotlions.com"},

    
    
  ];

  function LinkMap() {
    return(
    
    links.map((link) => {
    return (
      <li key={link.linkName}>
      <Link
        
        href={link.href}
        className={clsx(
          'inline-block border border-white rounded hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-2 px-4 text-center',
          {
            'bg-sky-100 text-blue-600': pathname === link.href,
          },
        )}
        >
        <p className="hidden md:block">{link.linkName}</p>
      </Link>
      </li>
    )})
    
    )};

  return (
    <nav className=" text-black mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
             <h6>Curse of the Secret Pools!</h6>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon */}
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex justify-between items-center mx-5 text-base">
                <LinkMap />
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Home
            </Link>
            <Link href="/poolofradiance" className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Pool of Radiance
            </Link>
            <Link href="/azurebonds" className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Curse of the Azure Bonds
            </Link>
            <Link href="/silverblades" className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Secret of the Silver Blades
            </Link>
            
            <Link href="/poolsofdarkness" className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Pools of Darkness
            </Link>
            <Link href="/about" className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              About
            </Link>
            <Link href="https://robotlions.com" className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              robotlions.com
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
