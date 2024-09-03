import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
	stacks: string[];
	title: string;
	description: string;
	githubLink: string;
	liveLink: string;
}

const Project: React.FC<ProjectProps> = ({
	stacks,
	title,
	description,
	githubLink,
	liveLink,
}) => {
	return (
		<div className="w-full border border-input rounded p-4 flex flex-col gap-2 tracking-wide leading-snug shadow-sm shadow-input">
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
				<a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg md:text-xl"
				>
					<FaGithub />
				</a>
				<a
					href={liveLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg md:text-xl"
				>
					<FaExternalLinkAlt />
				</a>
			</div>
		</div>
	);
};

export default Project;
