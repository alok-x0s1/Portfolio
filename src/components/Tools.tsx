"use client";

import { orbitron } from "@/data/fonts";
import React from "react";
import { DiGit } from "react-icons/di";
import { FaGithub, FaWindows } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import {
	SiNetlify,
	SiPostman,
	SiVercel,
	SiVisualstudiocode,
} from "react-icons/si";
import { motion } from "framer-motion";

// Animation Variants
const toolVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hover: { scale: 1.1, rotate: 3, transition: { duration: 0.2 } },
};

const Tools = () => {
	const tools = [
		{ name: "VsCode", icon: <SiVisualstudiocode /> },
		{ name: "Postman", icon: <SiPostman /> },
		{ name: "Git", icon: <DiGit /> },
		{ name: "Github", icon: <FaGithub /> },
		{ name: "Gitlab", icon: <FiGitlab /> },
		{ name: "Vercel", icon: <SiVercel /> },
		{ name: "Netlify", icon: <SiNetlify /> },
		{ name: "Windows", icon: <FaWindows /> },
	];

	return (
		<div className="px-4 sm:px-8 md:px-16 flex flex-col /95 mt-12 text-lg tracking-wide leading-snug w-full">
			<h2
				className={`${orbitron.className} text-3xl font-semibold mb-4 text-center sm:text-left`}
			>
				Tools <span className="text-secondaryTextColor">I use</span>
			</h2>

			<div className="flex flex-wrap justify-center items-center gap-8 mt-12">
				{tools.map((tool) => (
					<motion.div
						key={tool.name}
						className="p-3 sm:p-4 md:p-6 rounded cursor-pointer border-2 shadow-md flex flex-col gap-1 items-center w-24 sm:w-32 md:w-40 lg:min-w-40 h-fit group duration-500 hover:border-secondaryTextColor dark:border-border border-transparent"
						variants={toolVariants}
						initial="hidden"
						whileInView="visible"
						whileHover="hover"
					>
						<div className="text-4xl sm:text-6xl md:text-7xl">
							{tool.icon}
						</div>
						<div className="text-base sm:text-base group-hover:text-secondaryTextColor duration-300">
							{tool.name}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Tools;
