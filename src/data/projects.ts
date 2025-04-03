const featuredProjects = [
	{
		title: "ShrinkIt",
		description:
			"Developed a modern URL shortening application with advanced features including password protection, QR code generation, and link management. Implemented user authentication using built-in middleware and cookies. Utilized MongoDB with Mongoose for efficient data handling.",
		githubLink: "https://github.com/alok-x0s1/ShrinkIt",
		liveLink: "https://shuck.vercel.app",
		date: "2024-09-16",
	},
	{
		title: "E-manage",
		description:
			"A full stack event management application built, frontend with react, backned using express, mongodb, and integrated real time event attendences and event creation using socket.io",
		githubLink: "https://github.com/alok-x0s1/E-manage",
		liveLink: "https://emanage.vercel.app",
		date: "2025-02-10",
	},
	{
		title: "Arise",
		description:
			"A React-based e-commerce platform that offers an immersive shopping experience. The app uses Firebase for the backend, handling user authentication, data storage, and real-time updates. Stripe is integrated for secure payment processing, with Firebase Cloud Functions generating clientSecrets.",
		githubLink: "https://github.com/alok-x0s1/Arise",
		liveLink: "https://a-rise-sigma.vercel.app",
		date: "2024-08-01",
	},
];

const frontendProjects = [
	{
		title: "RBAC",
		description:
			"A Role-Based Access Control system featuring user management, dynamic roles and permissions, and a clean UI. Easily manage users and control access with flexible role editing and JSON profile views.",
		githubLink: "https://github.com/alok-x0s1/rbac_vrv",
		liveLink: "https://rbac-alok.vercel.app",
		date: "2024-11-22",
	},
	{
		title: "Recipe Wiz",
		description:
			"A dynamic and responsive recipe discovery app allowing users to search, filter, and explore a wide variety of recipes based on cuisine, meal type, time, and difficulty.",
		githubLink: "https://github.com/alok-x0s1/Recipe-Wiz",
		liveLink: "https://recipewiz.vercel.app",
		date: "2024-11-07",
	},
	{
		title: "Playlist Pro",
		description:
			"PlaylistPro is a solution for effortless playlist management. Input a playlist link to calculate total duration and video count. Customize filters for watching speeds from 0.25x to 2x and view video demos with thumbnails, durations, titles, and YouTube links.",
		githubLink: "https://github.com/alok-x0s1/PlaylistPro",
		liveLink: "https://playlistpro-alok.vercel.app",
		date: "2024-05-25",
	},
	{
		title: "Lock Crafter",
		description:
			"Introducing a sleek React Password Generator leveraging useRef, useEffect, and useCallback hooks. It automatically generates strong passwords, updates in real-time, and offers a quick copy feature for seamless integration.",
		githubLink: "https://github.com/alok-x0s1/Lock-Crafter",
		liveLink: "https://lockcrafter.vercel.app",
		date: "2024-05-08",
	},
];

const fullStackProjects = [
	{
		title: "Flickr",
		description:
			"Flickr is an anonymous feedback app built with Next.js. Users can manage incoming messages through a dashboard, accepting or declining feedback. Share your profile link to receive anonymous messages. The app uses Tailwind CSS, Radix UI, NextAuth, and OpenAI for a secure and seamless experience.",
		githubLink: "https://github.com/alok-x0s1/Flickr",
		liveLink: "https://flickrrr.vercel.app",
		date: "2024-08-17",
	},
	{
		title: "Sumera",
		description:
			"A comprehensive finance management application designed to help users gain control over their finances. This project is designed to help you manage your finances effectively by tracking your expenses, setting budgets, and analyzing your spending habits.",
		githubLink: "https://github.com/alok-x0s1/Sumera",
		liveLink: "https://sumera.vercel.app",
		date: "2024-09-27",
	},
	{
		title: "Guidly",
		description:
			"A web app to connect mentors and mentees based on skills and interests. Features include profile creation, matchmaking, connection management, and notifications.",
		githubLink: "https://github.com/alok-x0s1/Guidly",
		liveLink: "https://guidly.vercel.app",
		date: "2024-12-12",
	},

	{
		title: "Quizzo",
		description:
			"A Quiz Management System where teachers can log in, create, edit, and delete quizzes, frontend built using React, and backend with Express, and Prisma.",
		githubLink: "https://github.com/alok-x0s1/Quizzo",
		liveLink: "https://quizzo-liart.vercel.app",
		date: "2025-02-14",
	},
];

const javascriptProjects = [
	{
		title: "Quote Generator",
		description:
			"Random Quote Generator website! Powered by JavaScript, it offers a range of features to keep you inspired. With just a click, you can copy quotes to your clipboard, listen to them read aloud, or share them on Twitter. The 'Inspire Me' button lets you generate a new quote whenever you need a boost.",
		githubLink: "https://github.com/alok-x0s1/Quote-Generator",
		liveLink: "https://quote-generator-alok.vercel.app",
		date: "2024-05-15",
	},
	{
		title: "QrSwift",
		description:
			"This project lets you create QR codes using a web page. You enter some text or a URL, and the QR code is generated instantly. The project uses HTML for the structure of the page, CSS for styling it, and JavaScript to handle the QR code creation.",
		githubLink: "https://github.com/alok-x0s1/QrSwift",
		liveLink: "https://qrswift.vercel.app",
		date: "2023-11-18",
	},
];

const backendProjects = [
	{
		title: "EchoTube",
		description:
			"It mimics YouTube’s core functionalities, including user authentication, video management, likes, comments, and tweets. The app utilizes Node.js, Express.js, and MongoDB for efficient data handling. The project also includes cloud storage for video uploads and image thumbnails.",
		githubLink: "https://github.com/alok-x0s1/EchoTube",
		date: "2024-07-29",
	},
	{
		title: "FileShare Hub",
		description:
			"A seamless file sharing platform built with Node.js, Express, MongoDB, Multer, EJS, and Tailwind CSS. Users can upload files up to 100MB, receive a unique download link, and share it with friends or colleagues for easy access and download.",
		githubLink: "https://github.com/alok-x0s1/FileShare-Hub",
		date: "2024-06-26",
	},
	{
		title: "BookBay",
		description:
			"A Dockerized Express.js and MongoDB application with user authentication, book management, shopping cart, and payment features. Admins manage books/users, and users browse and purchase books.",
		githubLink: "https://github.com/alok-x0s1/Book-Bay",
		date: "2024-10-24",
	},
];

const abandonedProjects = [
	{
		title: "MoneyMap",
		description:
			"A simple web application for tracking personal finances, visualizing transactions, and managing budgets. Here, you can first specify your budgets and then add transactions to them.",
		githubLink: "https://github.com/alok-x0s1/MoneyMap",
		liveLink: "https://moneymap-alok.vercel.app",
		date: "2025-02-17",
	},
	{
		title: "EmageXpert",
		description:
			"EmageXpert is an intuitive image editor that allows users to apply filters, add text overlays with customizable colors and backgrounds, and draw shapes like rectangles, circles, and lines. Built with modern web technologies.",
		githubLink: "https://github.com/alok-x0s1/EmageXpert",
		liveLink: "https://emagexpert.vercel.app",
		date: "2024-10-19",
	},
	{
		title: "Next Auth",
		description:
			"A Next.js project focused on backend development, featuring user authentication and email verification functionality. This app allows users to sign up, log in, verify their email addresses, and manage their profiles securely.",
		githubLink: "https://github.com/alok-x0s1/next-auth",
		date: "2024-08-08",
	},
	{
		title: "Harmony Hub",
		description:
			"Harmony Hub is a cutting-edge music academy app built with Next.js. It transforms music education by providing an intuitive platform for students, teachers, and administrators. With features for interactive lessons, performance tracking, and streamlined administration, Harmony Hub enhances the learning experience and simplifies school management.",
		githubLink: "https://github.com/alok-x0s1/Harmony-Hub",
		liveLink: "https://harmony-hub-alok.vercel.app",
		date: "2024-05-31",
	},
	{
		title: "Chat Nexus",
		description:
			"A real-time chatting application built using WebSocket. This project is divided into two main sections: the frontend and the backend. The frontend provides a user-friendly interface for creating chat rooms and sending messages, while the backend handles the real-time communication between multiple users.",
		githubLink: "https://github.com/alok-x0s1/Learning-ws",
		date: "2024-10-08",
	},
	{
		title: "TodoFy",
		description:
			"A full-featured To-Do app built with Node.js, Express, MongoDB, React, and Tailwind CSS. Includes task creation, updates, deletions, completion marking, and user authentication.",
		githubLink: "https://github.com/alok-x0s1/TodoFy",
		date: "2024-07-02",
	},
	{
		title: "Backend API for Task management",
		description:
			"A simple yet powerful backend for a task management system, built using Express, Prisma, PostgreSQL, and TypeScript. This project allows users to manage projects, assign tasks, and track progress, while ensuring proper role-based access control.",
		githubLink: "https://github.com/alok-x0s1/Learning-prisma",
		date: "2024-10-12",
	},
	{
		title: "Currency Convertor",
		description:
			"Discover a sleek currency converter powered by Vite, boasting custom hooks for streamlined functionality. With an extensive array of currency options and real-time updates, it ensures accurate conversions on any device. Simplify international transactions with ease.",
		githubLink: "https://github.com/alok-x0s1/Currency-Convertor",
		liveLink: "https://currency-convertor-alok.vercel.app",
		date: "2024-05-11",
	},
	{
		title: "SmartDineMenu",
		description:
			"A frontend food ordering web application which is currently in development.",
		githubLink: "https://github.com/alok-x0s1/SmartDineMenu",
		liveLink: "https://smartdinemenu.vercel.app",
		date: "2025-02-22",
	},
];

const techStacks = [
	{
		name: "Programming Languages",
		skills: ["C++, ", "JavaScript, ", "TypeScript, ", "SQL"],
	},
	{
		name: "Frontend",
		skills: ["Next.js, ", "React, ", "Redux, ", "Tailwind CSS"],
	},
	{
		name: "Backend",
		skills: ["Node.js, ", "Express.js, ", "Appwrite, ", "Firebase"],
	},
	{
		name: "Databases",
		skills: ["MongoDB, ", "Mongoose, ", "PostgreSQL, ", "Prisma"],
	},
	{
		name: "Tools",
		skills: [
			"VsCode, ",
			"Postman, ",
			"Git, ",
			"Github, ",
			"Gitlab, ",
			"Vercel, ",
			"Netlify",
		],
	},
];

export {
	featuredProjects,
	frontendProjects,
	fullStackProjects,
	javascriptProjects,
	backendProjects,
	abandonedProjects,
	techStacks,
};
