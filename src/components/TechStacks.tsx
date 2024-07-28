import { orbitron } from "@/data/fonts";
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAppwrite, SiExpress, SiMongodb, SiMongoose } from "react-icons/si";

const TechStacks = () => {
	const logos = [
		{ icon: <CgCPlusPlus />, name: "C++" },
		{ icon: <DiJavascript1 />, name: "Javascript" },
		{ icon: <DiReact />, name: "React" },
		{ icon: <FaNode />, name: "NodeJs" },
		{ icon: <SiExpress />, name: "ExpressJs" },
		{ icon: <SiMongodb />, name: "MongoDb" },
		{ icon: <SiMongoose />, name: "Mongoose" },
		{ icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
		{ icon: <SiAppwrite />, name: "Appwrite" },
	];

	return (
		<div className="px-16 flex flex-col text-primaryTextColor/95 mt-12 text-lg tracking-wide leading-snug w-full">
			<h2 className={`${orbitron.className} text-3xl font-semibold mb-4`}>
				Professional{" "}
				<span className="text-secondaryTextColor">skillset</span>
			</h2>

			<div className="flex flex-wrap justify-center items-center gap-8 mt-12">
				{logos.map((logo) => (
					<div
						key={logo.name}
						className="p-6 sm:p-4 xs:p-3 rounded-sm cursor-pointer border-2 hover:-translate-y-2 shadow-md flex flex-col gap-3 items-center min-w-40 bg-gray-200/50 group hover:border-secondaryTextColor duration-500"
					>
						<div className="text-8xl sm:text-6xl xs:text-5xl">
							{logo.icon}
						</div>
						<div className="text-base group-hover:text-secondaryTextColor duration-300">
							{logo.name}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechStacks;
