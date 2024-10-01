import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export const Footer = () => {
	return (
		<div
			className="bg-primary h-56 flex flex-col md:flex-col lg:flex-row items-center 
		justify-around space-x-6 px-10 border-t-2 border-secondary"
		>
			<p className="text-white text-xl mt-4 lg:mt-0 lg:w-1/6 font-cairolight">
				Motivation gets you going, but discipline keeps you growing. {<br />}{" "}
				<div className="text-lg font-cairolight text-end m-4">
					- John C. Maxwell
				</div>
			</p>
			<div className="flex flex-col md:flex-row lg:flex-row gap-14 lg:gap-24 text-white">
				<div className="text-tertiary">
					<p className="text-2xl mb-4 font-cairobold">Site Map</p>
					<ul className="grid grid-cols-2 text-lg font-cairolight">
						<li>
							<a href="#top">Home</a>
						</li>
						<li>
							<a href="#it-journey">My IT Journey</a>
						</li>
						<li>
							<a href="#about-me">About</a>
						</li>
						<li>
							<a href="#skills-and-training">Skills & Training</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
					</ul>
				</div>

				<div className="text-tertiary">
					<p className="text-2xl mb-4 font-cairobold">Contact Me</p>
					<ul className="grid grid-cols-1 text-lg font-cairolight">
						<li className="flex items-center space-x-2">
							<BiLogoGmail />
							<span>cosmedencelmigui@gmail.com</span>
						</li>
						<li className="flex items-center space-x-2">
							<FaGithub />
							<a
								target="_blank"
								href="https://github.com/cothme"
							>
								cothme
							</a>
						</li>
						<li className="flex items-center space-x-2">
							<FaLinkedin />
							<a
								target="_blank"
								href="https://www.linkedin.com/in/migui-cosme/"
							>
								Dencel Migui Cosme
							</a>
						</li>
						<li className="flex items-center space-x-2">
							<FaFacebookF />
							<a
								target="_blank"
								href="https://www.facebook.com/miguicothme/"
							>
								Migui Cosme
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="text-tertiary mt-8 lg:mt-0 font-cairolight text-md lg:text-xl flex flex-col text-center">
				<div>Made with ❤️ by Dencel Migui Cosme</div>
				<div> © 2024 Cosme. All Rights Reserved.</div>
			</div>
		</div>
	);
};
