import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectProps {
	date?: string;
	title: string;
	description: string;
	githubLink: string;
	liveLink?: string;
}

const cardVariants = {
	tap: {
		scale: 0.98,
		transition: { type: "spring", stiffness: 300, damping: 15 },
	},
};

const Project: React.FC<ProjectProps> = ({
	date,
	title,
	description,
	githubLink,
	liveLink,
}) => {
	return (
		<motion.div
			className="w-full border border-zinc-600 hover:border-zinc-400/50 rounded-lg p-4 md:p-6 flex flex-col gap-2 tracking-wide group duration-300"
			whileHover="hover"
			whileTap="tap"
			variants={cardVariants}
		>
			<div className="text-xs text-zinc-100">
				{date ? (
					<time
						className={`${
							date === "2024-11-07" && "text-secondaryTextColor"
						}`}
						dateTime={new Date(date).toISOString()}
					>
						{Intl.DateTimeFormat(undefined, {
							dateStyle: "medium",
						}).format(new Date(date))}
					</time>
				) : (
					<span>SOON</span>
				)}
			</div>
			<h2 className="font-display tracking-wide text-2xl sm:text-3xl font-bold text-zinc-300 group-hover:text-white">
				{title}
			</h2>

			<p className="mb-4 text-zinc-400 group-hover:text-zinc-300 leading-6 duration-300">
				{description}
			</p>

			<div className="flex gap-5 justify-start items-center text-end">
				<motion.a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg md:text-xl"
					whileHover={{ scale: 1.2, color: "#f39c12" }}
				>
					<FaGithub />
				</motion.a>

				{liveLink && (
					<motion.a
						href={liveLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-lg md:text-xl"
						whileHover={{ scale: 1.2, color: "#f39c12" }}
					>
						<FaExternalLinkAlt />
					</motion.a>
				)}
			</div>
		</motion.div>
	);
};

export default Project;
