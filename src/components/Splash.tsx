"use client";

import { lobster } from "@/data/fonts";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SplashScreen({
	onAnimationComplete,
}: {
	onAnimationComplete: () => void;
}) {
	const [pathAnimationComplete, setPathAnimationComplete] = useState(false);

	return (
		<motion.div
			className="fixed inset-0 flex items-center justify-center"
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, delay: 3.5 }}
			onAnimationComplete={onAnimationComplete}
		>
			<div className="text-center">
				<motion.div
					initial={{ scale: 0.5, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="mb-4 relative inline-block"
				>
					<span
						className={`text-4xl p-4 font-bold ${lobster.className} relative z-10`}
					>
						AY
					</span>
					<svg
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%]"
						viewBox="0 0 400 400"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<motion.path
							d="M200 40 L355.885 149.098 L288.167 331.902 L111.833 331.902 L44.1152 149.098 Z"
							stroke="currentColor"
							strokeWidth="8"
							strokeLinecap="round"
							strokeLinejoin="round"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 2, delay: 0.5 }}
							onAnimationComplete={() =>
								setPathAnimationComplete(true)
							}
							className={
								pathAnimationComplete
									? "text-secondaryTextColor"
									: ""
							}
						/>
					</svg>
				</motion.div>
			</div>
		</motion.div>
	);
}
