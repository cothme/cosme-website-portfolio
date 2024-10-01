import PromoImg from "../assets/images/projects-images/promotional-img2.jpg";
import GamePoster from "../assets/images/projects-images/game_poster.jpg";
import Lvl1 from "../assets/images/projects-images/lvl1_env.jpg";
import Lvl2 from "../assets/images/projects-images/lvl3_env.jpg";
import LinkLearn1 from "../assets/images/projects-images/linklearn_1.png";
import LinkLearn2 from "../assets/images/projects-images/linklearn_2.png";
import LinkLearn3 from "../assets/images/projects-images/linklearn_3.png";
import Mind1 from "../assets/images/projects-images/mind_1.jpg";
import Mind2 from "../assets/images/projects-images/mind_2.jpg";
import Mind3 from "../assets/images/projects-images/mind_3.png";
import Mind4 from "../assets/images/projects-images/mind_4.jpg";
import Personal1 from "../assets/images/projects-images/personal_1.png";
import Personal2 from "../assets/images/projects-images/personal_2.png";
import Personal3 from "../assets/images/projects-images/personal_3.png";
export const projects = [
	{
		title: "Abducted: A Mind's Nightmare",
		src: { PromoImg, GamePoster, Lvl1, Lvl2 },
		description: `We developed a 3D single-player survival-horror game for PC that provides an 
		immersive experience as players navigate a mysterious spaceship, created alongside four 
		team members. This project served as our capstone requirement in college. My role involved 
		writing the entire codebase, which includes AI, player movement, level design, and game 
		mechanics. I implemented a Singleton design pattern to manage the game's state and utilized 
		a Finite State Machine to control the AI's behavior.`,
		languages: ["C#", "Unity", "Autodesk Maya"],
		link: "",
		color1: "#212529",
		color2: "#C63D65",
	},
	{
		title: "Abducted: A Mind's Nightmare Website",
		src: { Mind1, Mind2, Mind3, Mind4 },
		description: `A website that I created to promote our game this is also a 
		part of requirement for our capstone, which features a user-friendly
		interface and showcases the game's key features. The site also includes a community section
		where users can discuss the game and share their experiences. I designed the website to be
		responsive and accessible on all devices. The site is built using HTML, CSS, JQuery for the 
		front-end, and PHP and MySQL for the back-end.`,
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
		description: `I created a personal website to promote my skills and showcase my projects. 
		The site features a responsive design and highlights my portfolio, resume, and contact 
		information. This project allowed me to practice my frontend skills using ReactJS and 
		experiment with new technologies such as Framer Motion.`,
		languages: ["ReactJS", "Framer Motion", "TailwindCSS", "TypeScript"],
		color1: "#33E4EA",
		color2: "#090B1A",
	},
];
