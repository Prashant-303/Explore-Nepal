"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  const router = useRouter();


  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Nepal", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Contact Us", href: "/contact" },
  ];

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center border-b-2 border-b-slate-200 bg-white font-bold">
      <div className="flex w-11/12 flex-col items-center justify-between md:flex-row">
        <div className="flex w-full items-center justify-between border-b-2 border-gray-300 md:w-auto md:border-none">
          <div
            className="flex flex-col cursor-pointer items-center text-2xl font-bold border shadow-lg bg-green-500 px-2 my-1 py-3 rounded-3xl"
            onClick={handleClick}
          >
          <p className="text-sm text-green-100">Explore Nepal</p>
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 text-black hover:text-gray-600 md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div
          className={`items-end text-base text-green-600 md:flex ${
            isOpen ? "flex" : "hidden"
          } w-full flex-col items-center md:w-[520px] md:flex-row`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 hover:bg-gray-100 hover:text-black ${
                isOpen ? "rounded-none" : "rounded-md"
              } flex w-full justify-center border-b-2 border-gray-200 transition-colors duration-200 md:border-none`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
