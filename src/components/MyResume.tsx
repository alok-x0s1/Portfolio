"use client";

import { motion } from "framer-motion";
import { DownloadIcon, EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const MyResume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="container flex items-center justify-center min-h-screen px-4 mx-auto py-24"
		>
			<div className="max-w-4xl mx-auto space-y-8">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="flex justify-center"
				>
					<Button
						size="lg"
						className="bg-slate-200 text-primaryBgColor hover:bg-slate-300 duration-300 mr-2"
						onClick={() => window.open("/resume/view", "_blank")}
					>
						<EyeIcon className="mr-2 h-4 w-4" />
						View
					</Button>

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

export default MyResume;
