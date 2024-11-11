"use client";

import { orbitron } from "@/data/fonts";
import React from "react";
import About from "./About";
import { motion } from "framer-motion";
import TechStacksAndTools from "./TechStacks";

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
			className="flex flex-col w-full gap-6 text-center"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<About />
			<TechStacksAndTools />

			<section className="flex flex-col gap-5 my-8 items-center sm:items-start">
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
