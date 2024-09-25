import PromoImg from "../assets/images/projects-images/promotional-img2.jpg";
import GamePoster from "../assets/images/projects-images/game_poster.jpg";
import Lvl1 from "../assets/images/projects-images/lvl1_env.jpg";
import Lvl2 from "../assets/images/projects-images/lvl3_env.jpg";
import LinkLearn1 from "../assets/images/projects-images/linklearn_1.png";
import LinkLearn2 from "../assets/images/projects-images/linklearn_2.png";
import LinkLearn3 from "../assets/images/projects-images/linklearn_3.png";
import Mind1 from "../assets/images/projects-images/mind_1.png";
import Mind2 from "../assets/images/projects-images/mind_2.png";
import Mind3 from "../assets/images/projects-images/mind_3.png";
import Mind4 from "../assets/images/projects-images/mind_4.png";
import Personal1 from "../assets/images/projects-images/personal_1.png";
import Personal2 from "../assets/images/projects-images/personal_2.png";
import Personal3 from "../assets/images/projects-images/personal_3.png";
export const projects = [
	{
		title: "Abducted: A Mind's Nightmare",
		src: { PromoImg, GamePoster, Lvl1, Lvl2 },
		description: `A 3D single-player survival-horror game for PC that offers an 
		immersive experience as the player navigates a mysterious spaceship. 
		The gameplay revolves around the character Alex, who has been abducted and must 
		make his way through a series of levels while avoiding traps, 52 solving puzzles, 
		and battling enemies.`,
		languages: ["C#", "Unity", "Autodesk Maya"],
		color1: "#212529",
		color2: "#C63D65",
	},
	{
		title: "Abducted: A Mind's Nightmare Website",
		src: { Mind1, Mind2, Mind3, Mind4 },
		description: `The promotional website for the game that includes a gallery, 
		and an about section. Additionally, it features a community forum where users 
		can initiate discussions on various topics and respond to other users' posts.`,
		languages: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "JQuery"],
		color1: "#FFFFFF",
		color2: "#C63D65",
	},
	{
		title: "LinkedLearn: Learning Management System",
		src: { LinkLearn1, LinkLearn2, LinkLearn3 },
		description: `A learning management system I developed 
		during my internship at GlobalTek BPO Inc. allows users to purchase courses 
		through Stripe payment integration and offers Google SSO for user convenience. 
		The system also features an admin dashboard where authorized users can perform CRUD functions 
		on courses and RUD functions for students. Additionally, admins can update the prices of the 
		courses they have created.`,
		languages: [
			"MERN",
			"TypeScript",
			"DaisyUI",
			"TailwindCSS",
			"GoogleSSO",
			"JWT",
			"Stripe",
		],
		color1: "#050A30",
		color2: "#8B2635",
	},
	{
		title: "Personal Website",
		src: { Personal1, Personal2, Personal3 },
		description: "A vibrant lemon, full of zest and freshness.",
		languages: ["ReactJS", "Framer Motion", "TailwindCSS", "TypeScript"],
		color1: "#33E4EA",
		color2: "#090B1A",
	},
];
