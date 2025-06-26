import type { Metadata } from "next";
import "./globals.css";
import { calSans, rubik } from "@/data/fonts";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
	title: {
		default: "alokYadav",
		template: "%s | alokYadav",
	},
	description:
		"Full-stack developer & CS student building modern web apps with Next.js and TypeScript",

	openGraph: {
		title: "alokYadav",
		description:
			"Full-stack developer & CS student building modern web apps with Next.js and TypeScript",

		url: "https://yalok.vercel.app",
		siteName: "alokYadav",
		images: [
			{
				url: "https://yalok.vercel.app/og-image.png",
				width: 1200,
				height: 630,
				alt: "alokYadav",
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
