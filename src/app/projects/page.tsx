"use client";

import Project from "@/components/Project";
import { orbitron } from "@/data/fonts";
import React from "react";
import { motion } from "framer-motion";
import {
	backendProjects,
	frontendProjects,
	fullStackProjects,
	otherProjects,
} from "@/data/projects";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const projectVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Page: React.FC = () => {
	return (
		<main className="min-h-screen">
			<div className="pt-32 px-4 sm:px-8 lg:px-16 xl:px-32 mb-12">
				<h2
					className={`${orbitron.className} text-2xl font-semibold mb-4 mt-4`}
				>
					1. Full Stack{" "}
					<span className="text-secondaryTextColor/80">Projects</span>
				</h2>

				<motion.div
					className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					{fullStackProjects.map((project, index) => (
						<motion.div variants={projectVariants} key={index}>
							<Project {...project} />
						</motion.div>
					))}
				</motion.div>

				<h2
					className={`${orbitron.className} text-2xl font-semibold mt-16 mb-4`}
				>
					2. Front End{" "}
					<span className="text-secondaryTextColor/80">Projects</span>
				</h2>
				<motion.div
					className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					{frontendProjects.map((project, index) => (
						<motion.div variants={projectVariants} key={index}>
							<Project {...project} />
						</motion.div>
					))}
				</motion.div>

				<h2
					className={`${orbitron.className} text-2xl font-semibold mt-16 mb-4`}
				>
					3. Back End{" "}
					<span className="text-secondaryTextColor/80">Projects</span>
				</h2>
				<motion.div
					className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					{backendProjects.map((project, index) => (
						<motion.div variants={projectVariants} key={index}>
							<Project {...project} />
						</motion.div>
					))}
				</motion.div>

				<h2
					className={`${orbitron.className} text-2xl font-semibold mt-16 mb-4`}
				>
					4. Javascript{" "}
					<span className="text-secondaryTextColor/80">Projects</span>
				</h2>
				<motion.div
					className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					{otherProjects.map((project, index) => (
						<motion.div variants={projectVariants} key={index}>
							<Project {...project} />
						</motion.div>
					))}
				</motion.div>

				<p className="mt-12 text-lg">
					For more projects, check out my{" "}
					<a
						href="https://github.com/alok-x0s1"
						className="underline hover:text-secondaryTextColor duration-300"
						target="_blank"
					>
						Github
					</a>
					,{" "}
					<a
						href="https://gitlab.com/mr_x0s1"
						className="underline hover:text-secondaryTextColor duration-300"
						target="_blank"
					>
						Gitlab
					</a>
					, or{" "}
					<a
						href="https://bitbucket.org/alok-x0s1"
						className="underline hover:text-secondaryTextColor duration-300"
						target="_blank"
					>
						BitBucket
					</a>
				</p>
			</div>
		</main>
	);
};

export default Page;
