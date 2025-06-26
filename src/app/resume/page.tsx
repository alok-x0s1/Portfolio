import MyResume from "@/components/MyResume";
import { Navigation } from "@/components/nav";

const Resume = () => {
	return (
		<div className="relative min-h-screen bg-primaryBgColor">
			<Navigation current="resume" />
			<MyResume />
		</div>
	);
};

export default Resume;
