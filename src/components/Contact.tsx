import React from 'react'
import { kanit } from '@/data/fonts'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className='flex flex-col p-8 gap-10 bg-gray-200/50 w-full text-center'>
        <h5 className={`${kanit.className} text-4xl mt-4`}>Let&apos;s Connect 🤝</h5>
        <p className="text-lg tracking-wide leading-snug">
          I&apos;m interested in contributing to interesting projects and ideas.
        </p>

        <a href="mailto:alok421yadav@gmail.com" className='text-2xl font-semibold text-secondaryTextColor'>
          <strong> Let&apos;s make magic with code 👋</strong>
        </a>

        <div className="links flex gap-16 text-secondaryTextColor justify-center items-center text-lg">
            <Link href="/" className='hover:text-primaryTextColor duration-200'>Home</Link>
            <Link href="/about" className='hover:text-primaryTextColor duration-200'>About</Link>
            <Link href="/projects" className='hover:text-primaryTextColor duration-200'>Projects</Link>
        </div>

        <div className="social-links flex gap-6 justify-center items-center text-3xl">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
            <FaFacebook />
        </div>
    </footer>
  )
}

export default Contact