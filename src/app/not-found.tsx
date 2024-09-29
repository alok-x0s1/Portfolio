"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
	const [currentUrl, setCurrentUrl] = useState<string>("");

	useEffect(() => {
		setCurrentUrl(window.location.pathname);
	}, []);

	// Animation variants for the title and message
	const bounceVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				type: "spring",
				stiffness: 100,
			},
		},
		bounce: {
			y: [-10, 0, -10],
			transition: {
				duration: 0.5,
				yoyo: Infinity,
			},
		},
	};

	const MotionLink = motion(Link); // Create a motion variant of the Link component

	return (
		<div className="flex flex-col items-center justify-center h-screen p-4 text-center relative">
			<motion.div
				variants={bounceVariants}
				initial="hidden"
				whileInView="visible"
				whileHover="bounce"
			>
				<FaExclamationTriangle className="text-6xl text-yellow-500 mb-4" />
			</motion.div>

			<motion.h1
				variants={bounceVariants}
				initial="hidden"
				whileInView="visible"
				className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
			>
				404 - Page Not Found
			</motion.h1>

			<motion.p
				variants={bounceVariants}
				initial="hidden"
				whileInView="visible"
				className="text-base sm:text-lg md:text-xl mb-6"
			>
				Oops! The page you&apos;re looking for doesn&apos;t exist.
			</motion.p>

			<MotionLink
				href="/"
				className="px-4 py-2 sm:px-6 sm:py-3 bg-secondaryTextColor rounded text-base sm:text-lg md:text-xl text-primary border-2 border-secondaryTextColor hover:bg-secondaryTextColor/80 transition duration-300"
				variants={bounceVariants}
				initial="hidden"
				whileInView="visible"
			>
				Go back
			</MotionLink>

			<motion.p
				variants={bounceVariants}
				initial="hidden"
				whileInView="visible"
				className="text-base sm:text-lg md:text-xl mb-6 absolute bottom-2"
			>
				The URL you tried to access is :{" "}
				<span className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
					{currentUrl}
				</span>
			</motion.p>
		</div>
	);
};

export default NotFound;
