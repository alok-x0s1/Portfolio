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
			<body className={`${rubik.className} bg-gray-200/50`}>
				<div className="">
					<Navbar />
				</div>
				{children}
			</body>
		</html>
	);
}
