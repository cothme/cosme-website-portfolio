import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Cothme from "../assets/images/cothme.png";
import { Tooltip } from "react-tooltip";
import { PiReadCvLogoFill } from "react-icons/pi";
import CV from "../assets/Cosme_CV.pdf";
export const Hero = () => {
	return (
		<>
			<div className="flex flex-col lg:flex-row lg:space-y-0 space-y-20 lg:space-x-40 text-tertiary pt-5 lg:pt-20">
				<div>
					<div className="flex items-center pl-10">
						<div className="hidden lg:block text-secondary mt-8 mx-8">
							______
						</div>
						<div className="flex flex-col px-4">
							<h1 className="text-secondary text-start text-2xl leading-relaxed font-cairovariable">
								Hi, my name is
							</h1>
							<h2 className="text-6xl font-bold pb-1 text-white font-cairobold">
								Dencel
							</h2>
							<p className="text-start text-xl max-w-lg font-cairoregular">
								A highly motivated Information Technology graduate with
								practical experience in web development, aspiring to become a
								full stack developer.
							</p>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex justify-center lg:justify-start text-secondary lg:ml-40 mt-4">
							___________________________________
						</div>
						<div className="flex flex-row space-x-6 justify-center lg:justify-start lg:ml-40 mt-4">
							<a
								href="https://github.com/cothme"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="text-3xl text-white hover:text-secondary" />
							</a>

							<a
								href="mailto:cosmedencelmigui@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BiLogoGmail className="text-3xl text-white hover:text-secondary" />
							</a>
							<a
								href="https://www.linkedin.com/in/migui-cosme/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="text-3xl text-white hover:text-secondary" />
							</a>
							<a
								data-tooltip-id="my-tooltip"
								href={CV}
								download="Cosme_CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<PiReadCvLogoFill className="text-3xl text-white hover:text-secondary" />
								<Tooltip
									id="my-tooltip"
									content="Download my Resume"
									variant="dark"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="w-[75%] lg:w-[40%]">
					<img
						src={Cothme}
						alt="Dencel Cosme"
					/>
				</div>
			</div>
		</>
	);
};
