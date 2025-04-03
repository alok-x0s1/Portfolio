"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
	{
		id: 1,
		name: "About",
		href: "/about",
	},
	{
		id: 2,
		name: "Projects",
		href: "/projects",
	},
	{
		id: 3,
		name: "Resume",
		href: "/resume",
	},
	{
		id: 4,
		name: "Contact",
		href: "/contact",
	},
];

export const Navigation: React.FC<{ current: string }> = ({ current }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const filteredItems = navItems.filter(
		(item) => item.name.toLocaleLowerCase() !== current.toLocaleLowerCase()
	);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{filteredItems.map((item, index) => (
							<Link
								key={item.id}
								href={item.href}
								className="duration-200 text-zinc-400 hover:text-zinc-100 group"
							>
								<span className="group-hover:text-secondaryTextColor">
									{index + 1}.
								</span>{" "}
								{item.name}
							</Link>
						))}
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
