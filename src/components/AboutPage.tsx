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
		<div className="flex flex-col w-full gap-6 mt-12 sm:mt-32 text-center text-primaryTextColor">
			<h1
				className={`${orbitron.className} text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight px-4 sm:px-8`}
			>
				<Typewriter
					options={{
						strings: [
							'Hey there, I&apos;m Alok <span class="text-secondaryTextColor">Yadav</span>.',
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</h1>

			<p className="text-base sm:text-lg tracking-wide leading-relaxed px-4 sm:px-8">
				Nice to meet you! 😁
			</p>
			<About />
			<TechStacks />
			<Tools />
			<section className="flex flex-col gap-6 my-12 sm:my-16 items-center sm:items-start px-4 sm:px-8 lg:px-16">
				<h2 className={`${orbitron.className} text-2xl sm:text-3xl font-semibold`}>
					Contact me
				</h2>
				<p className="text-base sm:text-lg tracking-wide leading-snug text-center sm:text-start">
					If you&apos;re looking to elevate your digital presence or
					have a project that needs that extra touch of finesse,
					let&apos;s connect. Drop me a line on{" "}
					<a href="https://x.com/" target="_blank" rel="noopener noreferrer">
						<strong className="text-secondaryTextColor"> Twitter</strong>
					</a>{" "}
					or shoot me an{" "}
					<a href="mailto:alok421yadav.com" target="_blank" rel="noopener noreferrer">
						<strong className="text-secondaryTextColor"> Email </strong>
					</a>
					– I&apos;d love to chat!
				</p>
			</section>
			<Contact />
		</div>
	);
};

export default AboutPage;