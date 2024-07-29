import { orbitron } from "@/data/fonts";
import React from "react";
import Project from "./Project";

const FeaturedProjects = () => {
	const projects = [
        {
            stacks: ["React.js", "Tailwind CSS", "Javascript"],
            title: "Playlist Pro",
            description:
                "PlaylistPro is a solution for effortless playlist management. Input a playlist link to calculate total duration and video count. Customize filters for watching speeds from 0.25x to 2x and view video demos with thumbnails, durations, titles, and YouTube links. Enjoy efficient data handling, robust error management, and an intuitive user experience",
            githubLink: "https://github.com/alok-x0s1/PlaylistPro",
            liveLink: "https://playlistpro-alok.vercel.app/",
        },
        {
            stacks: ["React.js", "Redux", "Tailwind CSS", "Appwrite"],
            title: "Frontify",
            description:
                "Frontify is a dynamic blog website built with React on the frontend and utilizing Appwrite as a Backend-as-a-Service (BaaS) solution. Appwrite handles functionalities like user authentication, database management, and file storage, allowing you to focus on crafting a beautiful and engaging user experience with React",
            githubLink: "https://github.com/alok-x0s1/frontify",
            liveLink: "https://ecommerceplatform.live",
        },
		{
			stacks: ["React", "TypeScript", "Tailwind CSS"],
			title: "Password Generator",
			description:
				"Introducing a sleek React Password Generator leveraging useRef, useEffect, and useCallback hooks. It automatically generates strong passwords, updates in real-time, and offers a quick copy feature for seamless integration.",
			githubLink: "https://github.com/alok-x0s1/Password-Generator",
			liveLink: "https://password-generator-alok.vercel.app",
		},
	];

	return (
		<div className="mt-24 px-32 mb-12">
			<h2
				className={`${orbitron.className} text-2xl sm:text-3xl font-semibold mb-8`}
			>
				Featured Projects
			</h2>

			<div className="w-full flex flex-wrap gap-12">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProjects;
