"use client";

import { ptSerif } from "@/data/fonts";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
	return (
		<div className="w-[60rem] flex flex-col gap-6 mt-32 text-center px-8 text-primaryTextColor">
			<h1 className={`${ptSerif.className} text-5xl font-bold tracking-tighter`}>
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

			<p className="intro-text text-lg tracking-wide leading-relaxed">
				I am a{" "}
				<span className="text-secondaryTextColor">
					<strong>Frontend Developer</strong>
				</span>{" "}
				who is passionate with crafting beautiful and functional digital
				experiences. With a keen eye for design and a knack for code, I
				specialize in bringing ideas to life through engaging user
				interfaces and seamless interactions. By using the newest and
				and most powerful tools, I design and build websites that are
				not only functional but also look great.
			</p>

			<p className="animate-scale">
              LEARN MORE ABOUT
              <Link href="/about">
                <span className="text-secondaryTextColor"> ME </span>
              </Link>
              !
            </p>
		</div>
	);
};

export default HeroSection;