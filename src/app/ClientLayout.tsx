"use client";

import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/Splash";
import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	const [showSplash, setShowSplash] = useState<boolean>(true);
	const pathname = usePathname();

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowSplash(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, []);
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
		>
			{showSplash && pathname === "/" ? (
				<SplashScreen
					onAnimationComplete={() => setShowSplash(false)}
				/>
			) : (
				<>
					<Navbar />
					{children}
					<Contact />
				</>
			)}
		</ThemeProvider>
	);
};

export default ClientLayout;
