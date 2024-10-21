"use client";

import { orbitron } from "@/data/fonts";
import Link from "next/link";
import React from "react";
import profilePic from "../../public/profile.jpeg";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaBitbucket } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2, delayChildren: 0.3 },
	},
};

const imageVariants = {
	hidden: { opacity: 0, scale: 0.8, rotate: 10 },
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: { type: "spring", stiffness: 50, damping: 10 },
	},
};

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
	},
};

const staggeredTextVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" },
	},
};

const socialLinkVariants = {
	hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const learnMoreVariants = {
	hover: { y: -5, transition: { duration: 0.4, yoyo: Infinity } },
};

const HeroSection = () => {
	return (
		<motion.div
			className="max-w-5xl mx-auto flex flex-col gap-6 mt-40 px-4 py-12 sm:px-8"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
				<motion.div
					className="h-40 w-40 sm:h-48 sm:w-48 overflow-hidden object-fill rounded shadow-sm shadow-input border border-input"
					variants={imageVariants}
				>
					<Image
						src={profilePic}
						alt="ProfilePic"
						className="h-full w-full object-cover"
					/>
				</motion.div>

				<motion.div className="flex-col flex gap-6 w-full sm:w-auto items-center sm:items-start">
					<motion.div
						className="text-center sm:text-start"
						initial="hidden"
						animate="visible"
					>
						<motion.h1
							className={`${orbitron.className} text-3xl sm:text-5xl font-semibold tracking-tight`}
							variants={staggeredTextVariants}
						>
							Alok Yadav
						</motion.h1>
						<motion.p
							className={`${orbitron.className} text-lg sm:text-xl p-2 tracking-wide leading-tight mt-4 rounded border border-input`}
							variants={staggeredTextVariants}
						>
							Javascript Developer.
						</motion.p>
					</motion.div>

					<div className="social-links flex flex-wrap gap-4 justify-center sm:justify-start items-center text-2xl cursor-pointer">
						{[
							{
								href: "https://github.com/alok-x0s1",
								icon: <FaGithub />,
							},
							{
								href: "https://www.linkedin.com/in/alok-x0s1",
								icon: <FaLinkedin />,
							},
							{
								href: "https://www.gitlab.com/mr_x0s1",
								icon: <FaGitlab />,
							},
							{
								href: "https://bitbucket.org/alok-x0s1",
								icon: <FaBitbucket />,
							},
							{
								href: "https://www.instagram.com/mr_x0s1",
								icon: <FaInstagram />,
							},
						].map(({ href, icon }, index) => (
							<motion.a
								key={index}
								href={href}
								target="_blank"
								className="p-2 border border-input hover:text-secondaryTextColor duration-500 rounded"
								whileHover="hover"
								variants={socialLinkVariants}
							>
								{icon}
							</motion.a>
						))}
					</div>
				</motion.div>
			</div>

			<motion.p
				className="intro-text text-base sm:text-lg tracking-wide mt-4 leading-relaxed text-start md:text-center sm:text-left"
				variants={textVariants}
			>
				I am a{" "}
				<span className="text-secondaryTextColor">
					<strong>Full Stack Developer</strong>
				</span>{" "}
				who loves creating beautiful and functional digital experiences.
				I have a good eye for design and enjoy coding. I specialize in
				turning ideas into engaging websites with smooth interactions.
				Using the latest tools, I build websites that work well and look
				great.
			</motion.p>

			<motion.p
				className="text-center text-lg sm:text-xl mt-6 cursor-pointer"
				whileHover="hover"
				variants={learnMoreVariants}
			>
				LEARN MORE ABOUT
				<Link href="/about">
					<span className="text-secondaryTextColor"> ME </span>
				</Link>
				!
			</motion.p>
		</motion.div>
	);
};

export default HeroSection;
