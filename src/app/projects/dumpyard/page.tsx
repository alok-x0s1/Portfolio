"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { containerVariants, projectVariants } from "@/data/framer-motion";
import { abandonedProjects } from "@/data/projects";
import Project from "@/components/Project";

const Dumpyard: React.FC = () => {
	return (
		<div className="container flex flex-col items-start justify-center min-h-screen px-4 mx-auto pt-10">
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-4xl font-bold tracking-wide text-red-600 animate-glitch font-display"
			>
				The Dumpyard
			</motion.h1>

			<p className="mt-6 text-lg text-primaryTextColor leading-relaxed">
				Welcome to the forgotten graveyard of unfinished ideas and
				broken code. Some projects were left behind, others were cursed
				with eternal bugs. Proceed with caution—you might find something
				that should have stayed buried.
			</p>

			<motion.div
				className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-10"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
			>
				{abandonedProjects.map((project, index) => (
					<motion.div variants={projectVariants} key={index}>
						<Project {...project} />
					</motion.div>
				))}
			</motion.div>
			<p className="mt-6 text-lg text-primaryTextColor leading-relaxed">
				{"(Just kidding, of course) "} All the projects you see here are
				perfectly crafted, bug-free, and made with the utmost care. Who
				needs testing, right?
			</p>

			<Link href="/projects" className="py-10">
				<Button
					variant="outline"
					className="hover:bg-red-600 hover:text-black duration-300"
				>
					Escape the Dumpyard
				</Button>
			</Link>
		</div>
	);
};

export default Dumpyard;
