"use client";

import { orbitron } from "@/data/fonts";
import React from "react";
import Typewriter from "typewriter-effect";
import About from "./About";
import TechStacks from "./TechStacks";
import Tools from "./Tools";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const AboutPage = () => {
	return (
		<motion.div
			className="flex flex-col w-full gap-6 mt-12 sm:mt-32 text-center"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.h1
				className={`${orbitron.className} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight px-4 sm:px-8`}
				variants={fadeInUp}
				whileHover={{ scale: 1.04 }}
				whileTap={{ scale: 0.98 }}
			>
				<Typewriter
					options={{
						strings: [
							`Hello, I'm Alok <span class="text-secondaryTextColor">Yadav</span>.`,
						],
						autoStart: true,
						loop: true,
						delay: 75,
					}}
				/>
			</motion.h1>

			<motion.p
				className="text-base sm:text-lg tracking-wide leading-relaxed px-4 sm:px-8"
				variants={fadeInUp}
			>
				Glad to connect with you! 😄
			</motion.p>

			{/* About Section */}
			<About />

			{/* Tech Stacks Section */}
			<TechStacks />

			{/* Tools Section */}
			<Tools />

			{/* Get in Touch Section */}
			<section className="flex flex-col gap-6 my-12 sm:my-16 items-center sm:items-start px-4 sm:px-8 lg:px-16">
				<motion.h2
					className={`${orbitron.className} text-2xl sm:text-3xl font-semibold`}
					variants={fadeInUp}
				>
					Get in{" "}
					<span className="text-secondaryTextColor">Touch</span>
				</motion.h2>
				<motion.p
					className="text-base sm:text-lg tracking-wide leading-snug text-center sm:text-start"
					variants={fadeInUp}
				>
					Interested in collaborating or have a project idea? Feel
					free to reach out. You can connect with me on{" "}
					<a
						href="https://twitter.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<strong className="text-secondaryTextColor">
							Twitter
						</strong>
					</a>{" "}
					or send me an{" "}
					<a
						href="mailto:alok421yadav@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<strong className="text-secondaryTextColor">
							Email
						</strong>
					</a>
					– looking forward to hearing from you!
				</motion.p>
			</section>
		</motion.div>
	);
};

export default AboutPage;
