import Project from "@/components/Project";
import React from "react";

const Page: React.FC = () => {
	const projectData = {
		stacks: ["React", "TypeScript", "Tailwind CSS"],
		title: "My Awesome Project",
		description: "This is a description of my awesome project. This is a description of my awesome project. This is a description of my awesome project.",
		githubLink: "https://github.com/yourusername/yourproject",
		liveLink: "https://yourproject.live",
	};

	return (
		<main className="min-h-screen">
			<section className="w-full">
				<Project
					stacks={projectData.stacks}
					title={projectData.title}
					description={projectData.description}
					githubLink={projectData.githubLink}
					liveLink={projectData.liveLink}
				/>
			</section>
		</main>
	);
};

export default Page;