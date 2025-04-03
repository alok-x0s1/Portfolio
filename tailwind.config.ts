import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				primaryTextColor: "#71717A",
				secondaryTextColor: "#FCBA04",
				primaryBgColor: "#0E0E10",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				blue: {
					"1": "#4B28A4",
					"2": "#371E77",
					"3": "#1C033C",
				},
			},
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": {
							content: "none",
						},
						"blockquote p:first-of-type::after": {
							content: "none",
						},
					},
				},
			},
			fontFamily: {
				rubik: ["var(--font-rubik)"],
				display: ["var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				scale: {
					"0%, 100%": {
						transform: "scale(1)",
					},
					"50%": {
						transform: "scale(1.1)",
					},
				},
				borderRadiusAnimation: {
					"0%": {
						borderRadius: "0% 51% 0% 47% / 43% 41% 0% 34%",
					},
					"100%": {
						borderRadius: "0% 51% 0% 47% / 43% 41% 0% 34%",
					},
					"50%": {
						borderRadius: "35% 0% 40% 0% / 37% 0% 46% 0%",
					},
				},
				grow: {
					"0%": {
						width: "0",
						height: "0",
						transform: "scale(0) translate(-50%, -50%)",
					},
					"50%": {
						width: "2.5rem",
						height: "2.5rem",
						transform: "scale(1.1) translate(-50%, -50%)",
					},
					"100%": {
						width: "2.5rem",
						height: "2.5rem",
						transform: "scale(1) translate(-50%, -50%)",
					},
				},

				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
				glitch: {
					"0%": {
						textShadow: "2px 2px red, -2px -2px yellow",
					},
					"25%": {
						textShadow: "-2px -2px red, 2px 2px yellow",
					},
					"50%": {
						textShadow: "2px -2px red, -2px 2px blue",
					},
					"75%": {
						textShadow: "-2px 2px red, 2px -2px yellow",
					},
					"100%": {
						textShadow: "2px 2px red, -2px -2px yellow",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				scale: "scale 1.5s infinite",
				"border-radius": "borderRadiusAnimation 8s infinite",
				grow: "grow 0.5s ease-in-out forwards",
				"fade-in": "fade-in 2s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 2s ease-in-out forwards",
				"fade-right": "fade-right 2s ease-in-out forwards",
				glitch: "glitch 1s infinite alternate;",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
