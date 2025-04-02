import type { Metadata } from "next";
import "./globals.css";
import { calSans, rubik } from "@/data/fonts";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
	title: {
		default: "Alok Yadav",
		template: "%s | Alok Yadav",
	},
	description:
		"Full Stack Developer | Passionate about web development and building scalable applications.",
	openGraph: {
		title: "Alok Yadav - Full Stack Developer",
		description:
			"Passionate about web development and building scalable applications.",
		url: "https://yalok.vercel.app",
		siteName: "Alok Yadav",
		images: [
			{
				url: "https://yalok.vercel.app/og-image.png",
				width: 1200,
				height: 630,
				alt: "Alok Yadav - Full Stack Developer",
			},
		],
		locale: "en-IN",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Alok Yadav",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en-IN"
			className={[rubik.className, calSans.variable].join(" ")}
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
