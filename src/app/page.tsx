import Link from "next/link";
import { Eye } from "lucide-react";
import { formatCount } from "@/utils/date";

export default async function Home() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/visit`, {
		cache: "no-store",
	});
	const { count } = await res.json();
	const visitCount = formatCount(count);

	const navigation = [
		{ name: "Projects", href: "/projects" },
		{ name: "Resume", href: "/resume" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-primaryBgColor p-4">
			<div className="absolute top-2 right-4 text-primaryTextColor hover:text-secondaryTextColor duration-300 animate-fade-in">
				<Eye className="inline-block" size={16} />
				<span className="text-sm ml-1">{visitCount}</span>
			</div>
			<nav className="my-8 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm sm:text-base duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>

			<h1 className="py-3.5 px-0.5 z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-8xl md:text-9xl whitespace-nowrap bg-clip-text">
				@LokYadav
			</h1>

			<div className="flex flex-col w-full text-center items-center animate-fade-in text-primaryTextColor">
				<h2 className="text-sm sm:text-base text-start sm:text-center md:text-lg w-11/12 sm:w-2/3">
					<span className="text-secondaryTextColor tracking-wider font-display">
						Full Stack Developer
					</span>{" "}
					who loves creating beautiful and functional digital
					experiences, has a good eye for design, enjoys coding, and
					specializes in turning ideas into engaging websites with
					smooth interactions.
				</h2>

				<p className="text-center text-sm sm:text-lg mt-6 cursor-pointer">
					<Link href="/about">
						LEARN MORE ABOUT
						<span className="text-secondaryTextColor"> ME </span>
					</Link>
					!
				</p>
			</div>
		</div>
	);
}
