"use client";

import { orbitron } from "@/data/fonts";
import React from "react";
import Typewriter from "typewriter-effect";
import About from "./About";
import Contact from "./Contact";
import TechStacks from "./TechStacks";
import Tools from "./Tools";

const AboutPage = () => {
	return (
		<div className="flex flex-col w-full gap-6 mt-32 text-center text-primaryTextColor">
			<h1
				className={`${orbitron.className} text-5xl font-bold tracking-tighter px-8`}
			>
				<Typewriter
					options={{
						strings: [
							'  Hey there, I&apos;m Alok <span class="text-secondaryTextColor">Yadav</span>.',
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</h1>

			<p className="text-lg tracking-wide leading-relaxed px-8">
				Nice to meet you! 😁
			</p>
			<About />
			<TechStacks />
			<Tools />
			<Contact />
		</div>
	);
};

export default AboutPage;
