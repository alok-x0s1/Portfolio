"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import MyResume from "@/components/MyResume";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="container flex items-center justify-center min-h-screen px-4 mx-auto py-24"
		>
			<div className="max-w-4xl mx-auto space-y-8">
				<div className="text-center">
					<h1 className="font-display text-4xl font-bold mb-2">
						My{" "}
						<span className="text-secondaryTextColor/80">
							Resume
						</span>
					</h1>
				</div>

				<motion.div
					initial={{ scale: 0.95 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
					className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl bg-slate-200"
				>
					<MyResume />
				</motion.div>

				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="flex justify-center"
				>
					<Button
						size="lg"
						className="bg-slate-200 text-primaryBgColor hover:bg-slate-300 duration-300"
						onClick={() => window.open("/resume.pdf", "_blank")}
					>
						<DownloadIcon className="mr-2 h-4 w-4" />
						Download Resume
					</Button>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Resume;
