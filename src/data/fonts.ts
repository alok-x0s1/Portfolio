import { Rubik } from "next/font/google";
import localFont from "next/font/local";

export const rubik = Rubik({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-rubik",
});

export const calSans = localFont({
	src: "../../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});
