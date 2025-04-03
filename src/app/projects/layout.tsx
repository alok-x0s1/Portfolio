export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative min-h-screen bg-primaryBgColor">
			{children}
		</div>
	);
}
