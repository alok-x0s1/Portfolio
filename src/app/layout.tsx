import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { rubik } from "@/data/fonts";
import Contact from "@/components/Contact";
import { ThemeProvider } from "@/components/theme-provider";

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
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
					<Contact />
				</ThemeProvider>
			</body>
		</html>
	);
}
