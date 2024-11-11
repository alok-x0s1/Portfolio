"use client";

import { orbitron } from "@/data/fonts";
import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2, delayChildren: 0.3 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
};

const headingVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const FeaturedProjects = () => {
	return (
		<motion.div
			className="mt-24 px-4 sm:px-8 lg:px-16 xl:px-32 mb-12"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<motion.h2
				className={`${orbitron.className} text-2xl sm:text-3xl font-semibold mb-8`}
				variants={headingVariants}
			>
				Featured{" "}
				<span className="text-secondaryTextColor/80">Projects</span>
			</motion.h2>

			<motion.div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12">
				{featuredProjects.map((project, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						viewport={{ once: true }}
					>
						<Project {...project} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default FeaturedProjects;
