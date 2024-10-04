"use client";

import Project from "@/components/Project";
import { orbitron } from "@/data/fonts";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const projectVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Page: React.FC = () => {
	const projects = [
		{
			stacks: [
				"NextJs",
				"Drizzle",
				"PostgreSQL",
				"Framer Motion",
				"Tailwind CSS",
			],
			title: "Sumera",
			description:
				"A comprehensive finance management application designed to help users gain control over their finances by tracking expenses, setting budgets, and analyzing spending patterns. This project is designed to help you manage your finances effectively by tracking your expenses, setting budgets, and analyzing your spending habits.",
			githubLink: "https://github.com/alok-x0s1/Sumera",
			liveLink: "https://sumera.vercel.app",
		},
		{
			stacks: ["React", "TypeScript", "Tailwind CSS"],
			title: "Password Generator",
			description:
				"Introducing a sleek React Password Generator leveraging useRef, useEffect, and useCallback hooks. It automatically generates strong passwords, updates in real-time, and offers a quick copy feature for seamless integration.",
			githubLink: "https://github.com/alok-x0s1/Password-Generator",
			liveLink: "https://password-generator-alok.vercel.app",
		},
		{
			stacks: ["Next.js", "TypeScript", "Tailwind CSS"],
			title: "Harmony Hub",
			description:
				"Harmony Hub is a cutting-edge music academy app built with Next.js. It transforms music education by providing an intuitive platform for students, teachers, and administrators. With features for interactive lessons, performance tracking, and streamlined administration, Harmony Hub enhances the learning experience and simplifies school management.",
			githubLink: "https://github.com/alok-x0s1/Harmony-Hub",
			liveLink: "https://harmony-hub-alok.vercel.app/",
		},
		{
			stacks: ["React.js", "Tailwind CSS", "Javascript"],
			title: "Playlist Pro",
			description:
				"PlaylistPro is a solution for effortless playlist management. Input a playlist link to calculate total duration and video count. Customize filters for watching speeds from 0.25x to 2x and view video demos with thumbnails, durations, titles, and YouTube links. Enjoy efficient data handling, robust error management, and an intuitive user experience.",
			githubLink: "https://github.com/alok-x0s1/PlaylistPro",
			liveLink: "https://playlistpro-alok.vercel.app/",
		},
		{
			stacks: ["React.js", "Javascript", "Tailwind CSS"],
			title: "Currency Convertor",
			description:
				"Discover a sleek currency converter powered by Vite, boasting custom hooks for streamlined functionality. With an extensive array of currency options and real-time updates, it ensures accurate conversions on any device. Simplify international transactions with ease.",
			githubLink: "https://github.com/alok-x0s1/Currency-Convertor",
			liveLink: "https://currency-convertor-alok.vercel.app/",
		},
		{
			stacks: ["Html", "CSS", "Javascript"],
			title: "Quote Generator",
			description:
				"Random Quote Generator website! Powered by JavaScript, it offers a range of features to keep you inspired. With just a click, you can copy quotes to your clipboard, listen to them read aloud, or share them on Twitter. The 'Inspire Me' button lets you generate a new quote whenever you need a boost, and quotes automatically refresh every 15 seconds to ensure a steady flow of inspiration.",
			githubLink: "https://github.com/alok-x0s1/Quote-Generator",
			liveLink: "https://quote-generator-alok.vercel.app/",
		},
		{
			stacks: ["Html", "CSS", "Javascript"],
			title: "QrSwift",
			description:
				"This project lets you create QR codes using a web page. You enter some text or a URL, and the QR code is generated instantly. The project uses HTML for the structure of the page, CSS for styling it, and JavaScript to handle the QR code creation. It's a handy tool for quickly converting any information into a scannable QR code.",
			githubLink: "https://github.com/alok-x0s1/QrSwift",
			liveLink: "https://qrswift.vercel.app/",
		},
	];

	return (
		<main className="min-h-screen">
			<div className="pt-32 px-4 sm:px-8 lg:px-16 xl:px-32 mb-12">
				<h2
					className={`${orbitron.className} text-2xl sm:text-3xl font-semibold mb-8`}
				>
					Projects I Created
				</h2>

				<motion.div
					className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					{projects.map((project, index) => (
						<motion.div variants={projectVariants} key={index}>
							<Project {...project} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</main>
	);
};

export default Page;
