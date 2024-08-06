import AboutPage from "@/components/AboutPage";
import React from "react";

const page = () => {
	return (
		<main className="min-h-screen antialiased">
			<section className="w-full flex justify-center items-center pt-24">
				<AboutPage />
			</section>
		</main>
	);
};

export default page;