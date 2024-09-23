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
        Successfully contributed to the development of REST APIs for the company's projects, 
        optimizing CRUD functionalities using the Laravel framework. 
        Assigned as an L1 technical support for a mobile app, 
        handling user reviews, addressing user complaints, and identifying bugs in the app.
        `,
		position: "left",
	},
	{
		logo: HSI,
		date: "December 2023 - March 2024",
		company_name: "Highly Succeed Inc.",
		role: "Web Developer Intern",
		description: `
        Successfully contributed to the development of REST APIs for the company's projects, 
        optimizing CRUD functionalities using the Laravel framework. 
        Assigned as an L1 technical support for a mobile app, 
        handling user reviews, addressing user complaints, and identifying bugs in the app.
        `,
		position: "right",
	},
	{
		logo: GlobalTek,
		date: "April 2024 - July 2024",
		company_name: "GlobalTek BPO Inc.",
		role: "Research and Development Intern",
		description: `
        Successfully contributed to the development of REST APIs for the company's projects, 
        optimizing CRUD functionalities using the Laravel framework. 
        Assigned as an L1 technical support for a mobile app, 
        handling user reviews, addressing user complaints, and identifying bugs in the app.
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
