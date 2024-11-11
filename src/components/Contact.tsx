"use client";

import React from "react";
import { orbitron } from "@/data/fonts";
import Link from "next/link";
import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaInstagram,
	FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const footerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const socialLinkVariants = {
	hover: {
		y: -5,
		transition: { duration: 0.3 },
	},
};

const Contact = () => {
	return (
		<motion.footer
			className="flex flex-col p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8 lg:gap-10 w-full text-center border-t border-input"
			variants={footerVariants}
			initial="hidden"
			whileInView="visible"
		>
			<h5
				className={`${orbitron.className} text-2xl sm:text-3xl lg:text-4xl mt-2 sm:mt-4 font-semibold tracking-tight`}
			>
				Let&apos;s Collaborate 🤝
			</h5>
			<p className="text-base sm:text-lg lg:text-xl tracking-wide leading-snug">
				I&apos;m eager to engage in exciting projects and innovative
				ideas.
			</p>

			<a
				href="mailto:alok421yadav@gmail.com"
				className={`${orbitron.className} text-lg sm:text-xl lg:text-2xl font-semibold text-secondaryTextColor`}
			>
				<strong>
					{" "}
					Let&apos;s create something amazing together 👋
				</strong>
			</a>

			<div className="links flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-base sm:text-lg">
				{["/", "/about", "/projects", "/hello-world"].map(
					(href, index) => (
						<Link
							key={index}
							href={href}
							className="hover:text-secondaryTextColor duration-300"
						>
							{href === "/"
								? "Home"
								: href.slice(1).charAt(0).toUpperCase() +
								  href.slice(2)}
						</Link>
					)
				)}
			</div>

			<div className="social-links flex gap-4 sm:gap-6 lg:gap-8 justify-center items-center text-2xl sm:text-3xl">
				{[
					<FaGithub key="github" />,
					<FaLinkedin key="linkedin" />,
					<FaTwitter key="twitter" />,
					<FaInstagram key="instagram" />,
					<FaFacebook key="facebook" />,
				].map((icon, index) => (
					<motion.div
						key={index}
						variants={socialLinkVariants}
						whileHover="hover"
					>
						{icon}
					</motion.div>
				))}
			</div>
		</motion.footer>
	);
};

export default Contact;
