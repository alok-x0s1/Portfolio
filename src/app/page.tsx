import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";

export default function Home() {
	return (
		<main className="min-h-screen antialiased">
			<section className="w-full flex justify-center items-center">
				<HeroSection />
			</section>
			<section className="w-full">
				<FeaturedProjects />
			</section>
		</main>
	);
}
