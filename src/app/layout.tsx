import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { rubik } from "@/data/fonts";

export const metadata: Metadata = {
	title: "Alok - Javascript Developer",
	description: "Full stack developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${rubik.className}`}>
				<div className="w-full flex items-center shadow-sm shadow-secondaryTextColor justify-center">
					<Navbar />
				</div>
				{children}
			</body>
		</html>
	);
}
