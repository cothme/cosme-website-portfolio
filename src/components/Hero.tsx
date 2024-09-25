import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Cothme from "../assets/images/cothme.png";
import { Tooltip } from "react-tooltip";
import { PiReadCvLogoFill } from "react-icons/pi";
import CV from "../assets/Cosme_CV.pdf";
import "./css/Hero.css";
import { Reveal } from "./Reveal";
export const Hero = () => {
	return (
		<>
			<div className="flex flex-col items-center md:flex-row lg:flex-row lg:space-y-0 space-y-20 justify-center text-tertiary pt-5 lg:pt-20 mb-48 lg:mb-64">
				<div className="flex flex-col justify-center item">
					<div className="flex items-center pl-10">
						<Reveal
							xStart={-75}
							xEnd={0}
							duration={0.8}
						>
							<div className="hidden lg:block text-secondary mx-8">______</div>
						</Reveal>
						<div className="w-72 lg:w-auto">
							<Reveal
								yStart={75}
								yEnd={0}
								duration={0.8}
							>
								<div>
									<h1 className="text-secondary text-start text-xl  lg:text-3xl leading-relaxed font-cairovariable">
										Hi, my name is
									</h1>
									<h2 className="text-5xl lg:text-7xl font-bold pb-1 text-white font-cairobold">
										Dencel
									</h2>
								</div>
							</Reveal>
							<Reveal
								xStart={75}
								xEnd={0}
								duration={1}
							>
								<p className="text-lg text-start lg:text-2xl max-w-lg font-cairoregular">
									A highly motivated Information Technology graduate with
									practical experience in web development, aspiring to become a
									full stack developer.
								</p>
							</Reveal>
						</div>
					</div>
					<Reveal
						yStart={75}
						yEnd={0}
						duration={0.8}
					>
						<div className="flex flex-col">
							<div className="flex justify-center lg:justify-start text-secondary lg:ml-36 mt-4">
								___________________________________
							</div>
							<div className="flex flex-row space-x-6 justify-center lg:justify-start lg:ml-36 mt-4">
								<Reveal
									rotateHidden={180}
									rotateVisible={0}
									duration={2}
								>
									<a
										href="https://github.com/cothme"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaGithub className="text-3xl text-white hover:text-secondary" />
									</a>
								</Reveal>

								<Reveal
									rotateHidden={180}
									rotateVisible={0}
									duration={2}
								>
									<a
										href="mailto:cosmedencelmigui@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<BiLogoGmail className="text-3xl text-white hover:text-secondary" />
									</a>
								</Reveal>

								<Reveal
									rotateHidden={180}
									rotateVisible={0}
									duration={1}
								>
									<a
										href="https://www.linkedin.com/in/migui-cosme/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaLinkedin className="text-3xl text-white hover:text-secondary" />
									</a>
								</Reveal>

								<Reveal
									rotateHidden={180}
									rotateVisible={0}
									duration={1}
								>
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
								</Reveal>
							</div>
						</div>
					</Reveal>
				</div>
				<div className="w-[100%] lg:w-[40%]">
					<Reveal
						scaleHidden={0.5}
						scaleVisible={1}
						duration={0.5}
					>
						<img
							src={Cothme}
							alt="Dencel Cosme"
						/>
					</Reveal>
				</div>
			</div>
		</>
	);
};
