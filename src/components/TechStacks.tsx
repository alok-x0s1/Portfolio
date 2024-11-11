"use client";

import { orbitron } from "@/data/fonts";
import React from "react";
import { motion } from "framer-motion";
import { techStacks, tools } from "@/data/projects";

const iconVariants = {
	hover: {
		scale: 1.1,
		rotate: [0, 5, -5, 0],
		transition: { duration: 0.3, ease: "easeInOut" },
	},
};

const aboutVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const TechStacksAndTools = () => {
	return (
		<motion.div
			className="flex flex-col mt-2 text-lg tracking-wide leading-snug w-full"
			variants={aboutVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<h2
				className={`${orbitron.className} text-3xl font-semibold text-center sm:text-left`}
			>
				Professional{" "}
				<span className="text-secondaryTextColor">skillset</span>
			</h2>

			<div className="mt-5 flex flex-col gap-6">
				{techStacks.map((category) => (
					<div key={category.name} className="flex items-center">
						<h3 className="text-lg text-center sm:text-left">
							{category.name}{" "}
							<span className="text-secondaryTextColor mx-2 font-bold">
								|
							</span>
						</h3>

						<div className="flex flex-wrap justify-start gap-2">
							{category.skills.map((skill) => (
								<motion.div
									key={skill}
									className="text-base cursor-pointer"
									variants={iconVariants}
									whileHover="hover"
								>
									<div className="hover:text-secondaryTextColor duration-300">
										{skill}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				))}

				<div className="flex items-center">
					<h3 className="text-lg text-center sm:text-left">
						Tools{" "}
						<span className="text-secondaryTextColor mx-2 font-bold">
							|
						</span>
					</h3>

					<div className="flex flex-wrap justify-start gap-2">
						{tools.map((tool) => (
							<motion.div
								key={tool}
								className="text-base cursor-pointer"
								variants={iconVariants}
								whileHover="hover"
							>
								<div className="hover:text-secondaryTextColor duration-300">
									{tool}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default TechStacksAndTools;
