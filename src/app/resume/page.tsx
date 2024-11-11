"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { orbitron } from "@/data/fonts";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="min-h-screen bg-background text-foreground p-8 pt-32"
		>
			<div className="max-w-4xl mx-auto space-y-8">
				<motion.div
					initial={{ y: -20 }}
					animate={{ y: 0 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
					className="text-center"
				>
					<h1
						className={`text-4xl font-bold mb-2 ${orbitron.className}`}
					>
						My{" "}
						<span className="text-secondaryTextColor/80">Resume</span>
					</h1>
				</motion.div>

				<motion.div
					initial={{ scale: 0.95 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
					className="rounded-lg dark:bg-slate-200 shadow-lg overflow-hidden hover:shadow-xl "
				>
					<MyResume />
				</motion.div>

				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="flex justify-center"
				>
					<Button
						size="lg"
						className="bg-primary text-primary-foreground hover:bg-primary/90"
						onClick={() => window.open("/resume.pdf", "_blank")}
					>
						<DownloadIcon className="mr-2 h-4 w-4" />
						Download Resume
					</Button>
				</motion.div>
			</div>
		</motion.div>
	);
};

const MyResume = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<motion.div
			className="max-w-4xl mx-auto p-10 shadow-lg rounded-lg border border-border"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.h1
				variants={itemVariants}
				className="text-4xl font-bold text-blue-3 mb-4"
			>
				ALOK YADAV
			</motion.h1>
			<motion.div
				variants={itemVariants}
				className="mb-1 text-lg text-blue-2"
			>
				<a
					href="mailto:yalok6321@gmail.com"
					className="hover:scale-105"
				>
					yalok6321@gmail.com
				</a>
				<span className="mx-2">|</span>
				<span>(+91) 8810727265</span>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="flex items-center space-x-2 mb-6 text-lg text-blue-2"
			>
				<a href="https://github.com/alok-x0s1">Github/alok-x0s1</a>
				<span>|</span>
				<a href="https://www.linkedin.com/in/alok-x0s1">
					Linkedin/alok-x0s1
				</a>
				<span>|</span>
				<a href="https://alok-yadav.vercel.app">alok.web</a>
			</motion.div>

			<motion.h2
				variants={itemVariants}
				className="text-2xl font-semibold text-blue-3 mb-3"
			>
				Skills
			</motion.h2>
			<motion.ul variants={containerVariants} className="space-y-1">
				<motion.li variants={itemVariants} className="text-blue-3">
					<strong className="font-medium text-blue-3">
						Programming Languages:
					</strong>{" "}
					C/C++, JavaScript, TypeScript, SQL
				</motion.li>
				<motion.li variants={itemVariants} className="text-blue-3">
					<strong className="font-medium text-blue-3">
						Web Technologies:
					</strong>{" "}
					ReactJS, NodeJS, ExpressJS, NextJS (Basics), HTML5, CSS3
				</motion.li>
				<motion.li variants={itemVariants} className="text-blue-3">
					<strong className="font-medium text-blue-3">
						Databases:
					</strong>{" "}
					MongoDB, Firebase, Appwrite
				</motion.li>
				<motion.li variants={itemVariants} className="text-blue-3">
					<strong className="font-medium text-blue-3">
						Developer Tools:
					</strong>{" "}
					Git, Github, Vercel, Postman, TailwindCSS
				</motion.li>
				<motion.li variants={itemVariants} className="text-blue-3">
					<strong className="font-medium text-blue-3">Other:</strong>{" "}
					RESTful APIs, Redux, Axios, Stripe, Authentication &
					Authorization
				</motion.li>
			</motion.ul>

			<motion.h2
				variants={itemVariants}
				className="text-2xl font-semibold text-blue-3 mt-10 mb-4"
			>
				Education
			</motion.h2>
			<motion.div variants={itemVariants}>
				<p className="text-lg text-blue-3 font-medium">
					Bachelor in Computer Applications
				</p>
				<p className="text-md italic text-blue-1">
					VBSPU Jaunpur | Sept 2022 - Aug 2025 (Expected)
				</p>
				<p className="text-md text-blue-1">Current CGPA: 7.92/10</p>
				<p className="text-md text-blue-3">
					Relevant Coursework: Object Oriented Programming, Databases,
					Discrete Maths, Data Structures and Algorithms, Operating
					Systems, Computer Networks, Data Mining.
				</p>
			</motion.div>

			<motion.h2
				variants={itemVariants}
				className="text-2xl font-semibold text-blue-3 mt-10 mb-4"
			>
				Project Work
			</motion.h2>
			<motion.div variants={containerVariants} className="space-y-4">
				<motion.div variants={itemVariants}>
					<a
						href="https://github.com/alok-x0s1/ShrinkIt"
						className="text-lg font-semibold text-blue-3 hover:underline"
					>
						ShrinkIt
					</a>
					<span className="text-md text-blue-2">
						{" "}
						| NextJs, MongoDB, Typescript, Framer Motion, Tailwind
						CSS
					</span>
					<ul className="list-disc list-inside ml-5 space-y-1 text-blue-3">
						<li>
							Developed a modern URL shortening application with
							advanced features including password protection, QR
							code generation, and link management.
						</li>
						<li>
							Implemented user authentication using built-in
							middleware and cookies.
						</li>
						<li>
							Utilized MongoDB with Mongoose for efficient data
							handling.
						</li>
						<li>
							Integrated TypeScript for improved type safety and
							maintainability and enhanced user experience through
							dynamic animations with Framer Motion.
						</li>
					</ul>
				</motion.div>

				<motion.div variants={itemVariants}>
					<a
						href="https://github.com/alok-x0s1/Flickr"
						className="text-lg font-semibold text-blue-3 hover:underline"
					>
						Flicker
					</a>
					<span className="text-md text-blue-2">
						{" "}
						| NextJs, MongoDB, NextAuth, OpenAI, Typescript, Framer
						Motion, Tailwind CSS
					</span>
					<ul className="list-disc list-inside ml-5 space-y-1 text-blue-3">
						<li>
							Built an anonymous feedback application enabling
							secure and open communication.
						</li>
						<li>
							Enhanced UI with dynamic animations using Framer
							Motion and maintaining a responsive design with
							Tailwind CSS.
						</li>
						<li>
							Implemented user authentication using NextAuth and
							also with custom authentication.
						</li>
						<li>
							Leveraged MongoDB and Mongoose for efficient data
							management.
						</li>
					</ul>
				</motion.div>

				<motion.div variants={itemVariants}>
					<a
						href="https://github.com/alok-x0s1/ARise"
						className="text-lg font-semibold text-blue-3 hover:underline"
					>
						Arise
					</a>
					<span className="text-md text-blue-2">
						{" "}
						| ReactJs, Firebase, Stripe, Firebase Cloud Functions,
						Redux, ThreeJs, Axios, Tailwind CSS
					</span>
					<ul className="list-disc list-inside ml-5 space-y-1 text-blue-3">
						<li>
							Developed a dynamic web application with user
							authentication and real-time data management using
							Firebase.
						</li>
						<li>
							Integrated Stripe for secure payment processing and
							implemented advanced features such as 3D view for
							enhanced interaction.
						</li>
						<li>
							Utilized Redux for state management, improving
							application performance, and Axios for API
							interactions.
						</li>
						<li>
							Designed a responsive user interface using Tailwind
							CSS, enhancing cross-device compatibility.
						</li>
					</ul>
				</motion.div>
			</motion.div>

			<motion.h2
				variants={itemVariants}
				className="text-2xl font-semibold text-blue-3 mt-10 mb-4"
			>
				Interests
			</motion.h2>
			<motion.ul
				variants={containerVariants}
				className="list-disc list-inside space-y-1 text-blue-3"
			>
				<motion.li variants={itemVariants}>
					Progressive Web Apps
				</motion.li>
				<motion.li variants={itemVariants}>
					Machine learning and Deep learning
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};

export default Resume;
