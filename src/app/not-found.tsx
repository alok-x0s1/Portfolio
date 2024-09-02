"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotFound = () => {
	const [currentUrl, setCurrentUrl] = useState<string>("");

	useEffect(() => {
		setCurrentUrl(window.location.pathname);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center h-screen p-4 text-center relative">
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
				404 - Page Not Found
			</h1>
			<p className="text-base sm:text-lg md:text-xl mb-6">
				Oops! The page you&apos;re looking for doesn&apos;t exist.
			</p>
			<Link
				href="/"
				className="px-4 py-2 sm:px-6 sm:py-3 bg-secondaryTextColor rounded text-base sm:text-lg md:text-xl text-primary border-2 border-secondaryTextColor hover:bg-background transition duration-300"
			>
				Go back
			</Link>
			<p className="text-base sm:text-lg md:text-xl mb-6 absolute bottom-2">
				The URL you tried to access is :{" "}
				<span className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
					{currentUrl}
				</span>
			</p>
		</div>
	);
};

export default NotFound;
