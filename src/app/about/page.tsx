import AboutPage from "@/components/AboutPage";
import { Navigation } from "@/components/nav";

export default function About() {
	return (
		<div className="bg-primaryBgColor">
			<Navigation current="about" />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto pt-24">
				<AboutPage />
			</div>
		</div>
	);
}
