import AboutPage from "@/components/AboutPage";
import React from "react";

const page = () => {
	return (
		<main className="min-h-screen antialiased">
			<section className="w-full flex justify-center items-center pt-32 px-4 sm:px-8 lg:px-16 xl:px-32">
				<AboutPage />
			</section>
		</main>
	);
};

export default page;
