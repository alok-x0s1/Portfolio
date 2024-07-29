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
		<div className="w-[550px] border border-gray-300 rounded-sm p-4 flex flex-col gap-2 tracking-wide leading-snug shadow-sm">
			<div className="flex flex-wrap gap-4 mb-1">
				{stacks.map((stack, index) => (
					<span
						key={index}
						className="text-secondaryTextColor text-base uppercase tracking-wide"
					>
						{stack}
					</span>
				))}
			</div>
			<h2 className="text-lg font-medium">{title}</h2>
			<p className="text-base sm:text-lg mb-4 text-primaryTextColor/75">
				{description}
			</p>
			<div className="flex gap-3 justify-start items-center">
				<a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xl"
				>
					<FaGithub />
				</a>
				<a
					href={liveLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg"
				>
					<FaExternalLinkAlt />
				</a>
			</div>
		</div>
	);
};

export default Project;
