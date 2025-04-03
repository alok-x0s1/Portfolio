import { featuredProjects } from "@/data/projects";
import Project from "./Project";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

const cardVariants = {
	tap: {
		scale: 0.98,
		transition: { type: "spring", stiffness: 300, damping: 15 },
	},
};

const FeaturedProject = () => {
	const remaining = featuredProjects.filter(
		(project) => project.title !== "ShrinkIt"
	);
	return (
		<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
			<motion.div
				className="w-full border border-zinc-600 hover:border-zinc-400/50 rounded-lg p-4 flex flex-col gap-2 tracking-wide group duration-300"
				whileHover="hover"
				whileTap="tap"
				variants={cardVariants}
			>
				<div className="text-xs text-zinc-100">
					{featuredProjects[0].date ? (
						<time
							dateTime={new Date(
								featuredProjects[0].date
							).toISOString()}
						>
							{Intl.DateTimeFormat(undefined, {
								dateStyle: "medium",
							}).format(new Date(featuredProjects[0].date))}
						</time>
					) : (
						<span>SOON</span>
					)}
				</div>
				<h2 className="font-display tracking-wide text-2xl sm:text-3xl font-bold text-zinc-300 group-hover:text-white">
					{featuredProjects[0].title}
				</h2>

				<p className="mb-2 text-zinc-400 group-hover:text-zinc-300 leading-6 duration-300">
					{featuredProjects[0].description}
				</p>

				<Image
					src="/shrinkit.png"
					alt="ShrinkIt"
					width={1000}
					height={1000}
					className="w-full rounded-lg border border-transparent duration-300 group-hover:border-zinc-400/50"
				/>

				<div className="mt-2 flex gap-5 justify-start items-center text-end">
					<motion.a
						href={featuredProjects[0].githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-lg md:text-xl"
						whileHover={{ scale: 1.2, color: "#f39c12" }}
					>
						<FaGithub />
					</motion.a>

					{featuredProjects[0].liveLink && (
						<motion.a
							href={featuredProjects[0].liveLink}
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

			<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
				{remaining.map((project) => (
					<Project key={project.title} {...project} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProject;
