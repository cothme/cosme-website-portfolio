import GradPic from "../assets/images/grad-pic.png";
export const AboutMe = () => {
	return (
		<>
			<div className="flex flex-row justify-center mb-48 lg:mb-64">
				<div className="flex items-center flex-col lg:flex-row justify-center space-x-11">
					<img
						src={GradPic}
						alt="Graduation Picture"
						className="w-[40%] lg:w-1/3 xl:w-1/4"
					/>
					<div className="text-white w-72 lg:w-1/2">
						<h1 className="text-white text-center lg:text-start mt-4 lg:mt-0 font-cairobold text-4xl lg:text-7xl">
							About Me
						</h1>
						<div className="flex flex-row">
							<div className="hidden lg:block text-secondary mt-10 mx-4">
								______
							</div>
							<p className="w-full mt-4 lg:mt-10 text-md lg:text-3xl font-cairoregular">
								I'm an Information Technology graduate with a specialization in
								Animation and Game Development. After completing two internships
								in backend and full stack development, I realized my passion
								lies in web development. Skilled in technologies like the MERN
								stack, Laravel, and RESTful APIs, I thrive in building dynamic,
								user-friendly web applications. I'm now seeking opportunities to
								contribute my skills to innovative projects in the web
								development field. Outside of tech, I enjoy exploring new gaming
								technologies and spending time outdoors.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
