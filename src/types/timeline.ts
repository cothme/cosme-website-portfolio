import HSI from "../assets/images/logos/hsi-logo.png";
import GlobalTek from "../assets/images/logos/globaltek-logo.png";
import FEUTech from "../assets/images/logos/feutech-logo.png";
export const timeline = [
	{
		logo: FEUTech,
		date: "2020 - 2024",
		company_name: "FEU Institute of Technology",
		role: "IT Student",
		description: `
        The starting point of my IT journey introduced me to the fundamentals of programming and 
		networking. During this time, I developed projects like a simple game using Unity 
		and built web applications using HTML, CSS, JavaScript, and PHP. 
		I also gained experience in 3D modeling and animation with Autodesk Maya, 
		as well as in networking and database management.
		
        `,
		position: "left",
	},
	{
		logo: HSI,
		date: "December 2023 - March 2024",
		company_name: "Highly Succeed Inc.",
		role: "Web Developer Intern",
		description: `
        At my first company, as part of my Internship 1 requirement, I gained hands-on experience 
		with RESTful APIs and learned how to build them using Laravel. My primary role 
		involved developing CRUD functionalities for the company's projects, where I also 
		optimized application performance. Additionally, I was part of an L1 support team 
		for a mobile app, responsible for handling user reviews, addressing complaints, 
		and identifying bugs.
        `,
		position: "right",
	},
	{
		logo: GlobalTek,
		date: "April 2024 - July 2024",
		company_name: "GlobalTek BPO Inc.",
		role: "Research and Development Intern",
		description: `
        At my second company for Internship 2, I worked the night shift as a Research and Development 
		Intern. My main project was developing a Learning Management System (LMS) using the 
		MERN stack, featuring a user-friendly interface with Google Single Sign-On (SSO), a 
		RESTful API, and Stripe integration for payments. I also built an admin dashboard for 
		managing courses and users. In addition, I researched Optical Character Recognition (OCR) 
		technology and successfully implemented it in one of the company's projects. 
		I was also responsible for researching the Vitest testing framework for future use 
		in the company's projects.
		
        `,
		position: "left",
	},
];

export interface TimelineProps {
	logo: string;
	date: string;
	company_name: string;
	role: string;
	description: string;
	position: string | "left";
}
