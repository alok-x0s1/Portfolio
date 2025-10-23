"use client";

export default function Loading() {
	return (
		<div className="flex items-center justify-center w-screen h-screen bg-primaryBgColor">
			<div className="relative">
				<h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondaryTextColor to-primaryTextColor animate-pulse invisible">
					alokYadav
				</h1>

				<div className="absolute -bottom-0 left-0 right-0 flex justify-center space-x-2">
					{[...Array(3)].map((_, i) => (
						<div
							key={i}
							className="w-2 h-2 rounded-full bg-secondaryTextColor"
							style={{
								animation: `bounce 1.5s infinite ${i * 0.2}s`,
							}}
						/>
					))}
				</div>
			</div>

			<style jsx global>{`
				@keyframes bounce {
					0%,
					100% {
						transform: translateY(0);
						opacity: 0.6;
					}
					50% {
						transform: translateY(-10px);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
}
