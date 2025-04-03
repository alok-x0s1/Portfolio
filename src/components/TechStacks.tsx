import { techStacks } from "@/data/projects";
import { CornerRightDown } from "lucide-react";

const TechStacksAndTools = () => {
	return (
		<div className="w-full flex flex-col gap-2 text-base sm:text-lg tracking-wide leading-snug text-start">
			<h2 className="font-display text-3xl font-semibold">
				Professional{" "}
				<span className="text-secondaryTextColor">skillset</span>
			</h2>

			<div className="mt-4 flex flex-col gap-3 w-full text-zinc-300">
				{techStacks.map((category) => (
					<div
						key={category.name}
						className="flex flex-col sm:flex-row sm:items-center flex-wrap"
					>
						<h3 className="text-lg flex items-end">
							{category.name}{" "}
							<span className="hidden sm:block text-secondaryTextColor mx-2 font-bold">
								|
							</span>
							<span className="block sm:hidden text-secondaryTextColor mx-2 font-bold">
								<CornerRightDown size={16} />
							</span>
						</h3>

						<div className="flex gap-2 flex-wrap ml-6 sm:ml-0">
							{category.skills.map((skill) => (
								<p
									key={skill}
									className="text-base cursor-pointer hover:text-secondaryTextColor duration-300"
								>
									{skill}
								</p>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechStacksAndTools;
