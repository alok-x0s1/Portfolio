"use client";

import React from "react";
import { motion } from "framer-motion";
import { baskervville, orbitron } from "@/data/fonts";

const aboutVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideVariants = {
	hidden: { opacity: 0, x: -30 }, // Start off-screen left
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.8 },
	},
};

const About = () => {
	return (
		<motion.div
			className="px-4 sm:px-8 lg:px-16 py-4 w-full flex flex-col gap-4 text-start mt-12 sm:mt-24 text-base sm:text-lg tracking-wide leading-snug"
			variants={aboutVariants}
			initial="hidden"
			whileInView="visible"
		>
			<h2
				className={`${orbitron.className} text-2xl sm:text-3xl font-semibold mb-4`}
			>
				About <span className="text-secondaryTextColor">me</span>
			</h2>
			<p className="text-base sm:text-lg">Hello there!👋</p>

			<motion.p
				className="text-base sm:text-lg"
				variants={slideVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }} // Animation triggers once when in view
			>
				I&apos;m Alok Yadav, and my goal is to create exceptional,
				innovative web experiences that not only perform seamlessly but
				also leave a lasting impact. My journey as a developer has been
				a rewarding self-taught adventure driven by a deep-seated
				passion for technology.
			</motion.p>

			<motion.p
				className="text-base sm:text-lg"
				variants={slideVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }} // Animation triggers once when in view
			>
				What distinguishes me is my dedication to ongoing learning.
				Whether it&apos;s through exploring online tutorials, consulting
				with mentors, or staying updated with the latest technologies,
				I&apos;m constantly seeking to expand my knowledge.
			</motion.p>

			<motion.p
				className="text-base sm:text-lg"
				variants={slideVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }} // Animation triggers once when in view
			>
				But life isn&apos;t just about tech! When I&apos;m not coding,
				you might find me relaxing with a good book, writing blog posts,
				or diving into exciting video games. I also enjoy playing the
				guitar, finding joy and relaxation in music.
			</motion.p>
		</motion.div>
	);
};

export default About;
