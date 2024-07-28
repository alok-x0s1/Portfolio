import React from 'react';
import { orbitron } from '@/data/fonts';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className='flex flex-col p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8 lg:gap-10 bg-gray-200/50 w-full text-center'>
        <h5 className={`${orbitron.className} text-2xl sm:text-3xl lg:text-4xl mt-2 sm:mt-4 font-semibold tracking-tight`}>
            Let&apos;s Connect 🤝
        </h5>
        <p className="text-base sm:text-lg lg:text-xl tracking-wide leading-snug">
            I&apos;m interested in contributing to interesting projects and ideas.
        </p>

        <a href="mailto:alok421yadav@gmail.com" className={`${orbitron.className} text-lg sm:text-xl lg:text-2xl font-semibold text-secondaryTextColor`}>
            <strong> Let&apos;s make magic with code 👋</strong>
        </a>

        <div className="links flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-base sm:text-lg lg:text-xl text-secondaryTextColor">
            <Link href="/" className='hover:text-primaryTextColor duration-200'>Home</Link>
            <Link href="/about" className='hover:text-primaryTextColor duration-200'>About</Link>
            <Link href="/projects" className='hover:text-primaryTextColor duration-200'>Projects</Link>
        </div>

        <div className="social-links flex gap-4 sm:gap-6 lg:gap-8 justify-center items-center text-2xl sm:text-3xl lg:text-4xl">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
            <FaFacebook />
        </div>
    </footer>
  );
}

export default Contact;