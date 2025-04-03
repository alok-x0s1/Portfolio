"use client";

import { calSans } from "@/data/fonts";
import { footerVariants, socialLinkVariants } from "@/data/framer-motion";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { TbBrandLinktree } from "react-icons/tb";

const footerLinks = [
	{
		id: 2,
		icon: <Linkedin />,
		href: "https://www.linkedin.com/in/alok-x0s1",
	},
	{
		id: 3,
		icon: <Twitter />,
		href: "https://x.com/alokdotcom",
	},
	{
		id: 5,
		icon: <Instagram />,
		href: "https://www.instagram.com/mr_x0s1",
	},
	{
		id: 6,
		icon: <TbBrandLinktree />,
		href: "https://linktr.ee/mr_x0s1",
	},
];

const Contact = () => {
	return (
		<motion.footer
			className="flex flex-col p-4 sm:p-6 lg:p-8 gap-2 w-full text-center border-t border-input"
			variants={footerVariants}
			initial="hidden"
			whileInView="visible"
		>
			<h5 className="text-2xl sm:text-3xl lg:text-4xl mt-2 sm:my-4 font-semibold tracking-tight font-display">
				Let&apos;s Collaborate 🤝
			</h5>
			<p className="text-base sm:text-lg lg:text-xl tracking-wide leading-snug">
				I&apos;m eager to engage in exciting projects and innovative
				ideas.
			</p>

			<a
				href="mailto:yalok6321@gmail.com"
				className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondaryTextColor font-display"
			>
				<strong>
					{" "}
					Let&apos;s create something amazing together 👋
				</strong>
			</a>

			<div className="social-links flex gap-4 sm:gap-6 lg:gap-8 justify-center items-center text-2xl sm:text-3xl mt-6">
				{footerLinks.map((link) => (
					<motion.div
						key={link.id}
						variants={socialLinkVariants}
						whileHover="hover"
						onClick={() => window.open(link.href, "_blank")}
					>
						{link.icon}
					</motion.div>
				))}
			</div>
		</motion.footer>
	);
};

export default Contact;
