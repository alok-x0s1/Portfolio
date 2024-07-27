import { baskervville, orbitron } from "@/data/fonts";
import React from "react";

const About = () => {
	return (
		<div className="px-16 py-4 w-full flex flex-col gap-3 text-start text-primaryTextColor/95 mt-24 text-lg tracking-wide leading-snug">
			<h2
				className={`${orbitron.className} text-3xl font-semibold mb-4`}
			>
				About Me
			</h2>

			<p>Hey there!👋</p>
			<p>
				I&apos;m Alok  Yadav, and I&apos;m on a mission to craft
				top-notch, modern web applications that not only scale
				effortlessly but also make a tangible difference in
				people&apos;s lives. My journey as a frontend developer has been
				a self-taught adventure fueled by an unyielding passion for
				technology.
			</p>

			<p>
				What sets me apart is my commitment to continuous growth.
				Whether it&apos;s through devouring online courses, seeking
				guidance from mentors, or staying at the forefront of emerging
				tools and trends, I&apos;m always hungry for knowledge.
			</p>

			<p>
				But life isn&apos;t just about code! When I&apos;m not immersed
				in programming, you&apos;ll likely find me unwinding with a
				sitcom on Netflix, penning down my thoughts in an article, or
				engaging in epic battles in video games. I&apos;m also a
				pianist, finding solace and joy in the harmonies of music.
			</p>
		</div>
	);
};

export default About;
