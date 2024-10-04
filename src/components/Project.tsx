import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectProps {
	stacks: string[];
	title: string;
	description: string;
	githubLink: string;
	liveLink: string;
}

const cardVariants = {
	hover: {
		scale: 1.02,
		boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
		transition: { duration: 0.4, ease: "easeInOut" },
	},
	tap: {
		scale: 0.98,
		transition: { type: "spring", stiffness: 300, damping: 15 },
	},
};

const Project: React.FC<ProjectProps> = ({
	stacks,
	title,
	description,
	githubLink,
	liveLink,
}) => {
	return (
		<motion.div
			className="w-full border border-input rounded p-4 flex flex-col gap-2 tracking-wide leading-snug"
			whileHover="hover"
			whileTap="tap"
			variants={cardVariants}
		>
			<div className="flex flex-wrap gap-2 mb-2">
				{stacks.map((stack, index) => (
					<span
						key={index}
						className="text-secondaryTextColor text-sm md:text-base uppercase tracking-wide"
					>
						{stack}
					</span>
				))}
			</div>

			<h2 className="text-base md:text-lg font-medium">{title}</h2>

			<p className="text-sm md:text-base mb-4">{description}</p>

			<div className="flex gap-5 justify-start items-center">
				<motion.a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg md:text-xl"
					whileHover={{ scale: 1.2, color: "#f39c12" }}
				>
					<FaGithub />
				</motion.a>

				<motion.a
					href={liveLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg md:text-xl"
					whileHover={{ scale: 1.2, color: "#f39c12" }}
				>
					<FaExternalLinkAlt />
				</motion.a>
			</div>
		</motion.div>
	);
};

export default Project;
