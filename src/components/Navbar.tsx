"use client";

import { lobster } from "@/data/fonts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeToggle } from "./theme-provider";
import { Button } from "./ui/button";

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
		<div className="fixed top-4 left-4 right-4 max-w-6xl mx-auto backdrop-blur-md rounded-md shadow-sm flex justify-between items-center px-6 py-3 z-50 border border-input shadow-input">
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
				<li>
					<Button variant="outline" className="shadow-sm shadow-input">
						<Link
							href="/projects"
							className="text-lg px-2 hover:text-secondaryTextColor"
						>
							Resume
						</Link>
					</Button>
				</li>
				<li className="nav-links px-4 mx-2 py-2">
					<ThemeToggle />
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
				className={`fixed md:hidden top-20 right-0 backdrop-blur-md bg-background h-fit p-8 w-1/2 sm:w-1/3 transform border border-input shadow-sm shadow-foreground ${
					nav
						? "translate-x-0 opacity-100"
						: "translate-x-full opacity-0"
				} transition-all duration-500 ease-in-out origin-top-right rounded-md shadow-lg`}
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
					<li onClick={() => setNav(false)}>
						<Button variant="outline">
							<Link
								href="/projects"
								className="text-lg px-2 hover:text-secondaryTextColor"
							>
								Resume
							</Link>
						</Button>
					</li>
					<li
						className="py-2 px-6 my-2"
						onClick={() => setNav(false)}
					>
						<ThemeToggle />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
