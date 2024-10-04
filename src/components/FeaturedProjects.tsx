"use client";

import { orbitron } from "@/data/fonts";
import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";

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
	const projects = [
		{
			stacks: [
				"NextJs",
				"MongoDB",
				"TypeScript",
				"Tailwind CSS",
				"Framer Motion",
			],
			title: "ShrinkIt",
			description:
				"Developed a modern URL shortening application with advanced features including password protection, QR code generation, and link management. Implemented user authentication using built-in middleware and cookies. Utilized MongoDB with Mongoose for efficient data handling. Integrated TypeScript for improved type safety and maintainability.",
			githubLink: "https://github.com/alok-x0s1/ShrinkIt",
			liveLink: "https://shuck.vercel.app",
		},
		{
			stacks: [
				"NextJs",
				"MongoDB",
				"NextAuth",
				"OpenAI",
				"Typescript",
				"Tailwind CSS",
			],
			title: "Flickr",
			description:
				"Flickr is an anonymous feedback app built with Next.js. Users can manage incoming messages through a dashboard, accepting or declining feedback. Share your profile link to receive anonymous messages. The app uses Tailwind CSS, Radix UI, NextAuth, and OpenAI for a secure and seamless experience.",
			githubLink: "https://github.com/alok-x0s1/Flickr",
			liveLink: "https://flickrrr.vercel.app",
		},
		{
			stacks: [
				"React",
				"Firebase",
				"Stripe",
				"Redux",
				"ThreeJs",
				"Tailwind CSS",
			],
			title: "Arise",
			description:
				"A React-based e-commerce platform that offers an immersive shopping experience. The app uses Firebase for the backend, handling user authentication, data storage, and real-time updates. Stripe is integrated for secure payment processing, with Firebase Cloud Functions generating clientSecrets.",
			githubLink: "https://github.com/alok-x0s1/Arise",
			liveLink: "https://a-rise-sigma.vercel.app",
		},
	];

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
				Featured Projects
			</motion.h2>

			<motion.div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12">
				{projects.map((project, index) => (
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
