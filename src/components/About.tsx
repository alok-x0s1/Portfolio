import { baskervville, orbitron } from "@/data/fonts";
import React from "react";

const About = () => {
	return (
		<div className="px-4 sm:px-8 lg:px-16 py-4 w-full flex flex-col gap-4 text-start text-primaryTextColor/95 mt-12 sm:mt-24 text-base sm:text-lg tracking-wide leading-snug">
			<h2
				className={`${orbitron.className} text-2xl sm:text-3xl font-semibold mb-4`}
			>
				About <span className="text-secondaryTextColor">me</span>
			</h2>

			<p className="text-base sm:text-lg">Hello there!👋</p>
			<p className="text-base sm:text-lg">
				I&apos;m Alok Yadav, and my goal is to create exceptional,
				innovative web experiences that not only perform seamlessly but
				also leave a lasting impact. My journey as a developer has been
				a rewarding self-taught adventure driven by a deep-seated
				passion for technology.
			</p>

			<p className="text-base sm:text-lg">
				What distinguishes me is my dedication to ongoing learning.
				Whether it&apos;s through exploring online tutorials, consulting
				with mentors, or staying updated with the latest technologies,
				I&apos;m constantly seeking to expand my knowledge.
			</p>

			<p className="text-base sm:text-lg">
				But life isn&apos;t just about tech! When I&apos;m not coding,
				you might find me relaxing with a good book, writing blog posts,
				or diving into exciting video games. I also enjoy playing the
				guitar, finding joy and relaxation in music.
			</p>
		</div>
	);
};

export default About;
