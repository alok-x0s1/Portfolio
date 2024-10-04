"use client";

import { lobster } from "@/data/fonts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeToggle } from "./theme-provider";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navbarVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
};

const linkVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.4, ease: "easeInOut" },
	},
};

const mobileMenuVariants = {
	hidden: { opacity: 0, x: 100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
};

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [nav, setNav] = useState(false);

	const links = [
		{ id: 1, link: "about" },
		{ id: 2, link: "projects" },
	];

	const handleResize = () => {
		if (window.innerWidth > 768) setNav(false);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) setScrolled(true);
			else setScrolled(false);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.div
			className={cn(
				"fixed top-4 left-4 right-4 max-w-6xl mx-auto backdrop-blur-md rounded flex justify-between items-center px-6 py-3 z-50 border",
				scrolled
					? "backdrop-blur-md border-border"
					: "bg-background border-background"
			)}
			variants={navbarVariants}
			initial="hidden"
			animate="visible"
		>
			{/* Logo */}
			<motion.h1
				className={`${lobster.className} text-3xl font-semibold ml-2 hover:text-secondaryTextColor duration-500`}
				variants={linkVariants}
			>
				<Link href="/" rel="noreferrer">
					<span>@lok</span>
					<span className="text-secondaryTextColor">Ya∂av</span>
				</Link>
			</motion.h1>

			{/* Desktop Links */}
			<ul className="hidden md:flex md:items-center">
				{links.map(({ id, link }) => (
					<motion.li
						key={id}
						className="nav-links px-2 mx-2 hover:text-secondaryTextColor duration-200 text-lg cursor-pointer capitalize"
						variants={linkVariants}
					>
						<Link href={link}>{link}</Link>
					</motion.li>
				))}
				<motion.li variants={linkVariants}>
					<Button
						variant="outline"
						className="text-lg hover:text-secondaryTextColor duration-300"
					>
						<Link href="/resume" className="px-2">
							Resume
						</Link>
					</Button>
				</motion.li>
				<motion.li
					className="nav-links px-4 mx-2 py-2"
					variants={linkVariants}
				>
					<ThemeToggle />
				</motion.li>
			</ul>

			{/* Mobile Menu Button */}
			<motion.div
				className="md:hidden cursor-pointer"
				onClick={() => setNav(!nav)}
			>
				{nav ? (
					<FaTimes className="text-2xl transition-transform duration-300 transform rotate-90" />
				) : (
					<FaBars className="text-2xl transition-transform duration-300 transform rotate-0" />
				)}
			</motion.div>

			{/* Mobile Menu */}
			<motion.div
				className={`fixed md:hidden top-20 right-0 backdrop-blur-md bg-background h-fit p-8 w-1/2 transform border border-input ${
					nav
						? "translate-x-0 opacity-100"
						: "translate-x-full opacity-0"
				} transition-all duration-500 ease-in-out origin-top-right rounded`}
				variants={mobileMenuVariants}
				initial="hidden"
				animate={nav ? "visible" : "hidden"}
			>
				<ul className="flex flex-col items-center w-full">
					<motion.li
						className="nav-links py-2 px-6 my-2 text-lg cursor-pointer rounded transition-all hover:text-secondaryTextColor duration-300"
						onClick={() => setNav(false)}
						variants={linkVariants}
					>
						<Link href="/">Home</Link>
					</motion.li>
					{links.map(({ id, link }) => (
						<motion.li
							key={id}
							className="nav-links py-2 px-6 text-lg mb-2 cursor-pointer capitalize rounded transition-all hover:text-secondaryTextColor duration-300"
							onClick={() => setNav(false)}
							variants={linkVariants}
						>
							<Link href={link}>{link}</Link>
						</motion.li>
					))}
					<motion.li
						onClick={() => setNav(false)}
						variants={linkVariants}
					>
						<Button
							variant="outline"
							className="text-lg hover:text-secondaryTextColor duration-300"
						>
							<Link href="/resume" className="px-2">
								Resume
							</Link>
						</Button>
					</motion.li>
					<motion.li
						className="py-2 px-6 my-2"
						onClick={() => setNav(false)}
						variants={linkVariants}
					>
						<ThemeToggle />
					</motion.li>
				</ul>
			</motion.div>
		</motion.div>
	);
};

export default Navbar;
