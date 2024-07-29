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

const Tools = () => {
	const tools = [
		{ name: "VsCode", icon: <SiVisualstudiocode /> },
		{ name: "Postman", icon: <SiPostman /> },
		{ name: "Git", icon: <DiGit /> },
		{ name: "Netlify", icon: <SiNetlify /> },
		{ name: "Github", icon: <FaGithub /> },
		{ name: "Gitlab", icon: <FiGitlab /> },
		{ name: "Vercel", icon: <SiVercel /> },
		{ name: "Windows", icon: <FaWindows /> },
	];
	return (
		<div className="px-4 sm:px-8 md:px-16 flex flex-col text-primaryTextColor/95 mt-12 text-lg tracking-wide leading-snug w-full">
			<h2 className={`${orbitron.className} text-3xl font-semibold mb-4 text-center sm:text-left`}>
				Tools <span className="text-secondaryTextColor">I use</span>
			</h2>

			<div className="flex flex-wrap justify-center items-center gap-8 mt-12">
				{tools.map((tool) => (
					<div
						key={tool.name}
						className="p-3 sm:p-4 md:p-6 rounded-sm cursor-pointer border-2 hover:-translate-y-2 shadow-md flex flex-col gap-1 items-center w-24 sm:w-32 md:w-40 lg:min-w-40 h-fit bg-gray-200/50 group hover:border-secondaryTextColor duration-500"
					>
						<div className="text-4xl sm:text-6xl md:text-8xl">
							{tool.icon}
						</div>
						<div className="text-base sm:text-base group-hover:text-secondaryTextColor duration-300">
							{tool.name}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tools;
