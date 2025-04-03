import About from "./About";
import TechStacksAndTools from "./TechStacks";

const AboutPage = () => {
	return (
		<div className="flex flex-col w-full gap-6 text-center p-2 sm:p-4">
			<About />
			<TechStacksAndTools />

			<div className="flex flex-col gap-4 my-8 items-start">
				<h2 className="font-display text-2xl sm:text-3xl font-semibold">
					Get in{" "}
					<span className="text-secondaryTextColor">Touch</span>
				</h2>
				<p className="text-base sm:text-lg tracking-wide leading-snug text-start text-zinc-300">
					Interested in collaborating or have a project idea? Feel
					free to reach out. You can connect with me on{" "}
					<a
						href="https://x.com/alokdotcom"
						target="_blank"
						rel="noopener noreferrer"
					>
						<strong className="text-secondaryTextColor font-display">
							Twitter
						</strong>
					</a>{" "}
					or send me an{" "}
					<a
						href="mailto:yalok6321@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<strong className="text-secondaryTextColor font-display">
							Email
						</strong>
					</a>
					– looking forward to hearing from you!
				</p>
			</div>
		</div>
	);
};

export default AboutPage;
