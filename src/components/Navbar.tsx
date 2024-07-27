"use client";

import { lobster } from "@/data/fonts";
import Link from "next/link";
import React, { useState } from "react";
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

	return (
		<div className="flex justify-between items-center w-[75rem] p-4">
			<div>
				<h1 className={`${lobster.className} text-3xl font-semibold ml-2 hover:text-secondaryTextColor duration-200`}>
					<Link className="" href="/" rel="noreferrer">
						<span>@lok</span>
						<span className="text-secondaryTextColor">Ya∂av</span>
					</Link>
				</h1>
			</div>

			<ul className="hidden md:flex md:items-center">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="nav-links px-2 mx-2 hover:text-secondaryTextColor duration-200 text-lg cursor-pointer capitalize"
					>
						<Link href={link == "projects" ? "#projects" : link}>{link}</Link>
					</li>
				))}
				<li className="nav-links px-4 mx-2 py-2 font-medium hover:text-secondaryTextColor duration-200 bg-gray-200/50 rounded-sm text-lg cursor-pointer">
					<Link href="/projects">Resume</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
