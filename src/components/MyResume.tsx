"use client";
import { containerVariants } from "@/data/framer-motion";
import { motion } from "framer-motion";

const MyResume = () => {
	return (
		<motion.div
			className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 shadow-lg rounded-lg border border-border"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-3 mb-4">
				ALOK YADAV
			</h1>

			<div className="mb-1 text-base sm:text-lg text-blue-2 break-words">
				<a
					href="mailto:yalok6321@gmail.com"
					className="hover:scale-105"
				>
					yalok6321@gmail.com
				</a>
				<span className="mx-2">|</span>
				<span>(+91) 8810727265</span>
			</div>

			<div className="flex flex-wrap items-center space-x-2 mb-6 text-base sm:text-lg text-blue-2">
				<a target="_blank" href="https://github.com/alok-x0s1">
					Github/alok-x0s1
				</a>
				<span>|</span>
				<a target="_blank" href="https://www.linkedin.com/in/alok-x0s1">
					Linkedin/alok-x0s1
				</a>
				<span>|</span>
				<a target="_blank" href="https://yalok.vercel.app">
					yalok.vercel.app
				</a>
			</div>

			<h2 className="text-xl sm:text-2xl font-semibold text-blue-3 mb-3">
				Skills
			</h2>
			<ul className="space-y-1 text-sm sm:text-base">
				<li className="text-blue-3">
					<strong className="font-medium text-blue-3">
						Programming Languages:
					</strong>{" "}
					C/C++, JavaScript, TypeScript, SQL
				</li>
				<li className="text-blue-3">
					<strong className="font-medium text-blue-3">
						Web Technologies:
					</strong>{" "}
					ReactJS, NodeJS, ExpressJS, NextJS (Basics), HTML5, CSS3
				</li>
				<li className="text-blue-3">
					<strong className="font-medium text-blue-3">
						Databases:
					</strong>{" "}
					MongoDB, Firebase, Appwrite
				</li>
				<li className="text-blue-3">
					<strong className="font-medium text-blue-3">
						Developer Tools:
					</strong>{" "}
					Git, Github, Vercel, Postman, TailwindCSS
				</li>
				<li className="text-blue-3">
					<strong className="font-medium text-blue-3">Other:</strong>{" "}
					RESTful APIs, Redux, Axios, Stripe, Authentication &
					Authorization
				</li>
			</ul>

			<h2 className="text-xl sm:text-2xl font-semibold text-blue-3 mt-10 mb-4">
				Education
			</h2>
			<div>
				<p className="text-lg sm:text-xl text-blue-3 font-medium">
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
			</div>

			<h2 className="text-xl sm:text-2xl font-semibold text-blue-3 mt-10 mb-4">
				Project Work
			</h2>
			<div className="space-y-4 text-sm sm:text-base">
				<div>
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
				</div>

				<div>
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
				</div>

				<div>
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
				</div>
			</div>

			<h2 className="text-xl sm:text-2xl font-semibold text-blue-3 mt-10 mb-4">
				Interests
			</h2>
			<ul className="list-disc list-inside space-y-1 text-blue-3">
				<li>Progressive Web Apps</li>
				<li>Machine learning and Deep learning</li>
			</ul>
		</motion.div>
	);
};

export default MyResume;
