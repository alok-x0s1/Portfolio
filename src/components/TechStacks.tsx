"use client";

import { orbitron } from "@/data/fonts";
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
	SiAppwrite,
	SiExpress,
	SiMongodb,
	SiMongoose,
	SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";

// Animation Variants
const iconVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hover: { scale: 1.1, rotate: 3, transition: { duration: 0.2 } },
};

const TechStacks = () => {
	const logos = [
		{ icon: <CgCPlusPlus />, name: "C++" },
		{ icon: <DiJavascript1 />, name: "Javascript" },
		{ icon: <DiReact />, name: "React" },
		{ icon: <FaNode />, name: "NodeJs" },
		{ icon: <SiExpress />, name: "ExpressJs" },
		{ icon: <SiMongodb />, name: "MongoDb" },
		{ icon: <SiMongoose />, name: "Mongoose" },
		{ icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
		{ icon: <SiAppwrite />, name: "Appwrite" },
		{ icon: <SiFirebase />, name: "Firebase" },
	];

	return (
		<div className="px-4 sm:px-8 md:px-16 flex flex-col /95 mt-12 text-lg tracking-wide leading-snug w-full">
			<h2
				className={`${orbitron.className} text-3xl font-semibold mb-4 text-center sm:text-left`}
			>
				Professional{" "}
				<span className="text-secondaryTextColor">skillset</span>
			</h2>

			<div className="flex flex-wrap justify-center items-center gap-8 mt-12">
				{logos.map((logo) => (
					<motion.div
						key={logo.name}
						className="p-3 sm:p-4 md:p-6 rounded cursor-pointer border-2 shadow-md flex flex-col items-center w-24 sm:w-32 md:w-40 lg:min-w-40 group duration-500 hover:border-secondaryTextColor dark:border-border border-transparent"
						variants={iconVariants}
						initial="hidden"
						whileInView="visible"
						whileHover="hover"
					>
						<div className="text-4xl sm:text-6xl md:text-7xl">
							{logo.icon}
						</div>
						<div className="text-xs sm:text-base group-hover:text-secondaryTextColor duration-300">
							{logo.name}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default TechStacks;
