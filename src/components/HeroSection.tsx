"use client";

import { kanit, baskervville, orbitron } from "@/data/fonts";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import profilePic from "../../public/profile.jpeg";
import Image from "next/image";
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

const HeroSection = () => {
	return (
		<div className="w-[60rem] flex flex-col gap-6 mt-24 px-8 text-primaryTextColor">
			<div className="flex items-start gap-8">
				<div className="h-48 w-48 overflow-hidden object-fill animate-border-radius">
					<Image
						src={profilePic}
						alt="ProfilePic"
						className="h-48 w-48"
					/>
				</div>
				<div className="flex-col flex gap-6 w-fit items-start justify-start">
					<div className="text-start">
						<h1
							className={`${orbitron.className} text-5xl mt-6 font-semibold tracking-tighter`}
						>
							AlokYadav
						</h1>
						<p
							className={`${orbitron.className} text-xl p-2 bg-gray-200/50 rounded-sm mt-1 tracking-wide leading-tight`}
						>
							Javascript Developer.
						</p>
					</div>
					<div className="social-links flex gap-6 justify-center items-center text-2xl cursor-pointer">
						<FaGithub />
						<FaLinkedin />
						<FaTwitter />
						<FaInstagram />
						<FaFacebook />
					</div>
				</div>
			</div>

			<p className="intro-text text-lg tracking-wide mt-4 leading-relaxed  text-center">
				I am a{" "}
				<span className="text-secondaryTextColor">
					<strong>Frontend Developer</strong>
				</span>{" "}
				who is passionate with crafting beautiful and functional digital
				experiences. With a keen eye for design and a knack for code, I
				specialize in bringing ideas to life through engaging user
				interfaces and seamless interactions. By using the newest and
				and most powerful tools, I design and build websites that are
				not only functional but also look great.
			</p>

			<p className="animate-scale  text-center">
				LEARN MORE ABOUT
				<Link href="/about">
					<span className="text-secondaryTextColor"> ME </span>
				</Link>
				!
			</p>
		</div>
	);
};

export default HeroSection;
