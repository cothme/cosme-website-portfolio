import GradPic from "../assets/images/grad-pic.png";
import { Reveal } from "./Reveal";
export const AboutMe = () => {
	return (
		<>
			<div
				id="about-me"
				className="flex flex-row justify-center mb-48 lg:mb-64"
			>
				<div className="flex items-center flex-col md:flex-row lg:flex-row justify-center space-x-11">
					<Reveal
						yStart={75}
						yEnd={0}
						duration={1}
						scaleHidden={0.5}
						scaleVisible={1}
					>
						<img
							src={GradPic}
							alt="Graduation Picture"
							className="lg:p-0 p-12"
						/>
					</Reveal>

					<div className="text-white w-72 lg:w-1/2">
						<Reveal
							yStart={-75}
							yEnd={0}
							duration={1}
						>
							<h1 className="text-white text-start lg:text-start mt-4 lg:mt-0 font-cairobold text-4xl lg:text-7xl">
								About Me
							</h1>
						</Reveal>

						<div className="block lg:hidden text-secondary">______</div>
						<div className="flex flex-row">
							<div className="hidden lg:block text-secondary mt-10 mx-4">
								______
							</div>
							<Reveal
								yStart={75}
								yEnd={0}
								duration={1}
							>
								<p className="w-full mt-4 lg:mt-10 text-md lg:text-2xl font-cairolight">
									I'm an Information Technology graduate with a focus on
									Animation and Game Development. Through two internships—one in
									backend development and another in full stack—I discovered my
									true passion for web development.
									<br /> <br /> Skilled in the MERN stack, Laravel, and building
									RESTful APIs, I enjoy creating dynamic, user-friendly web
									applications. I'm now eager to contribute my expertise to
									innovative projects in the web development space.
									<br /> <br /> When I'm not coding, I like to explore the
									latest in gaming technology and spend time outdoors.
								</p>
							</Reveal>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
