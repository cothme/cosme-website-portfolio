import { useState } from "react";
import Logo from "../../../assets/images/logos/logo-white.png";
import { motion } from "framer-motion";
import { AnimatedHamburgerButton } from "../../buttons/AnimatedHamburgerButton";
import "../../css/Navbar.css";
export const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const changeNavbackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeNavbackground);

	return (
		<header
			className={`sticky ${
				navbar ? "bg-primary bg-opacity-50 backdrop-blur-2xl" : "bg-opacity-10"
			} top-0 z-50 bg-primary text-tertiary transition duration-300`}
		>
			<nav className="h-[102px] flex items-center justify-between px-6 md:px-10">
				{/* Logo and Brand */}
				<div className="flex items-center gap-4">
					<a href="#top">
						<img
							src={Logo}
							alt="Dencel Cosme Logo"
							className="w-32"
						/>
					</a>
				</div>

				{/* Navigation Links */}
				<ul className="hidden md:flex flex-row space-x-6 font-cairobold text-lg text-white">
					<motion.a
						href="#top"
						className="hover-border"
					>
						Home
					</motion.a>
					<motion.a className="hover-border">Work</motion.a>
					<motion.a
						onClick={() =>
							document
								.getElementById("last")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="hover-border"
					>
						About
					</motion.a>
				</ul>
				<div className="block lg:hidden md:hidden">
					<AnimatedHamburgerButton />
				</div>
			</nav>
		</header>
	);
};
