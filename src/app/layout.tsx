import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "@/data/fonts";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
	title: "2004 | Alok Yadav",
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
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
