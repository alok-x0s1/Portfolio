"use client";

import { orbitron } from "@/data/fonts";
import Link from "next/link";
import React from "react";
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
		<div className="max-w-5xl mx-auto flex flex-col gap-6 mt-40 px-4 sm:px-8 text-primaryTextColor">
			<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
				<div className="h-40 w-40 sm:h-48 sm:w-48 overflow-hidden object-fill animate-border-radius">
					<Image
						src={profilePic}
						alt="ProfilePic"
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="flex-col flex gap-6 w-full sm:w-auto items-center sm:items-start">
					<div className="text-center sm:text-start">
						<h1
							className={`${orbitron.className} text-3xl sm:text-5xl font-semibold tracking-tight`}
						>
							Alok Yadav
						</h1>
						<p
							className={`${orbitron.className} text-lg sm:text-xl p-2 bg-gray-200/50 rounded-sm mt-1 tracking-wide leading-tight`}
						>
							Javascript Developer.
						</p>
					</div>
					<div className="social-links flex flex-wrap gap-4 justify-center sm:justify-start items-center text-2xl cursor-pointer">
						<a
							href="https://github.com"
							target="_blank"
						>
							<FaGithub />
						</a>
						<a href="https://www.linkedin.com" target="_blank">
							<FaLinkedin />
						</a>
						<a href="https://x.com" target="_blank">
							<FaTwitter />
						</a>
						<a
							href="https://www.instagram.com/mr_x0s1"
							target="_blank"
						>
							<FaInstagram />
						</a>
						<a href="https://www.facebook.com" target="_blank">
							<FaFacebook />
						</a>
					</div>
				</div>
			</div>

			<p className="intro-text text-base sm:text-lg tracking-wide mt-4 leading-relaxed text-start md:text-center sm:text-left">
				I am a{" "}
				<span className="text-secondaryTextColor">
					<strong>Full Stack Developer</strong>
				</span>{" "}
				who loves creating beautiful and functional digital experiences.
				I have a good eye for design and enjoy coding. I specialize in
				turning ideas into engaging websites with smooth interactions.
				Using the latest tools, I build websites that work well and look
				great.
			</p>

			<p className="animate-scale text-center">
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
