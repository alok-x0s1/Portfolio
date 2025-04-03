"use client";

import Project from "@/components/Project";
import { motion } from "framer-motion";
import {
	backendProjects,
	frontendProjects,
	fullStackProjects,
	javascriptProjects,
} from "@/data/projects";
import { containerVariants, projectVariants } from "@/data/framer-motion";
import FeaturedProject from "@/components/FeaturedProject";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navigation } from "@/components/nav";

const Projects: React.FC = () => {
	return (
		<>
			<Navigation current="projects" />
			<div className="container flex flex-col items-start justify-center min-h-screen px-4 mx-auto pt-24">
				<h2 className="font-display text-2xl font-semibold mb-4 mt-4 tracking-wide">
					Featured &nbsp;
					<span className="text-secondaryTextColor/80">Projects</span>
				</h2>
				<FeaturedProject />

				<h2 className="font-display text-2xl font-semibold mb-4 mt-16 tracking-wide">
					Full-Stack &nbsp;
					<span className="text-secondaryTextColor/80">Projects</span>
				</h2>

				<motion.div
					className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12"
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

				<h2 className="font-display text-2xl font-semibold mt-16 mb-4 tracking-wide">
					Back-End &nbsp;
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

				<h2 className="font-display text-2xl font-semibold mt-16 mb-4 tracking-wide">
					Front-End &nbsp;
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

				<h2 className="font-display text-2xl font-semibold mt-16 mb-4 tracking-wide">
					Javascript &nbsp;
					<span className="text-secondaryTextColor/80">Projects</span>
				</h2>
				<motion.div
					className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					{javascriptProjects.map((project, index) => (
						<motion.div variants={projectVariants} key={index}>
							<Project {...project} />
						</motion.div>
					))}
				</motion.div>

				<Link href="/projects/dumpyard" className="py-10">
					<Button
						variant="destructive"
						size="lg"
						className="text-white font-display tracking-wider"
					>
						Dumpyard
					</Button>
				</Link>
			</div>
		</>
	);
};

export default Projects;
