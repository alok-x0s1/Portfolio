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
		<div className="relative flex justify-between items-center w-[75rem] p-4">
			{/* Logo Section */}
			<div>
				<h1
					className={`${lobster.className} text-3xl font-semibold ml-2 hover:text-secondaryTextColor duration-200`}
				>
					<Link className="" href="/" rel="noreferrer">
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
				className="md:hidden absolute top-4 right-4 cursor-pointer z-50"
				onClick={() => setNav(!nav)}
			>
				{nav ? (
					<FaTimes className="text-2xl" />
				) : (
					<FaBars className="text-2xl" />
				)}
			</div>
			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-full p-4 w-1/2 sm:w-1/3 transform z-10 ${
					nav ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out origin-top-right backdrop-blur-md bg-white bg-opacity-30`}
			>
				<ul className="flex flex-col items-center mt-8">
					<li
						className="nav-links py-2 text-lg cursor-pointer"
						onClick={() => setNav(false)}
					>
						<Link href="/">Home</Link>
					</li>
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="nav-links py-2 text-lg cursor-pointer capitalize"
							onClick={() => setNav(false)}
						>
							<Link href={link}>{link}</Link>
						</li>
					))}
					<li
						className="nav-links py-2 text-lg cursor-pointer"
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
