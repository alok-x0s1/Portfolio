"use client";

import { lobster } from "@/data/fonts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "projects",
    },
  ];

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-4 left-4 right-4 max-w-5xl mx-auto backdrop-blur-md bg-gray-200 bg-opacity-40 rounded-full shadow-lg flex justify-between items-center px-6 py-3 z-50">
      {/* Logo Section */}
      <div>
        <h1
          className={`${lobster.className} text-3xl font-semibold ml-2 hover:text-secondaryTextColor duration-200`}
        >
          <Link href="/" rel="noreferrer">
            <span>@lok</span>
            <span className="text-secondaryTextColor">Ya∂av</span>
          </Link>
        </h1>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex md:items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-2 mx-2 hover:text-secondaryTextColor duration-200 text-lg cursor-pointer capitalize"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
        <li className="nav-links px-4 mx-2 py-2 font-medium hover:text-secondaryTextColor duration-200 bg-gray-200/50 rounded-sm text-lg cursor-pointer">
          <Link href="/projects">Resume</Link>
        </li>
      </ul>
      {/* Mobile Menu Button */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <FaTimes className="text-2xl transition-transform duration-300 transform rotate-90" />
        ) : (
          <FaBars className="text-2xl transition-transform duration-300 transform rotate-0" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-20 right-0 h-fit p-8 w-1/2 sm:w-1/3 transform backdrop-blur-md bg-gray-200 bg-opacity-500 ${
          nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-transform duration-300 ease-in-out origin-top-right rounded-md shadow-lg`}
      >
        <ul className="flex flex-col items-center w-full">
          <li
            className="nav-links py-2 px-6 my-2 text-lg cursor-pointer rounded-lg transition-all hover:text-secondaryTextColor duration-300"
            onClick={() => setNav(false)}
          >
            <Link href="/">Home</Link>
          </li>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links py-2 px-6 text-lg mb-2 cursor-pointer capitalize rounded-lg transition-all hover:text-secondaryTextColor duration-300"
              onClick={() => setNav(false)}
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
          <li
            className="nav-links py-2 px-6 text-lg border-2 border-secondaryTextColor bg-secondaryTextColor cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-300"
            onClick={() => setNav(false)}
          >
            <Link href="/projects">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;