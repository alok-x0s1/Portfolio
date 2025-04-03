import { Navigation } from "@/components/nav";

export default function ResumeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative min-h-screen bg-primaryBgColor">
			<Navigation current="resume" />
			{children}
		</div>
	);
}
