import { Title } from "../Title";
import { Logo } from "../Logo";
import { technologies, tools, frameworks } from "../../types/techstack";
import { certificates } from "./certificates";
import { Certificate } from "./Certificate";
import { Reveal } from "../Reveal";

export const SkillsTrainingBody = () => {
	return (
		<>
			<Reveal
				xStart={75}
				xEnd={0}
				duration={1}
			>
				<Title
					title="Skills and Training"
					position="text-start"
				/>
			</Reveal>

			<div className="container mx-auto pb-8">
				{/* Section Title */}
				<h2 className="text-2xl text-center text-white font-cairobold mb-8 lg:text-start">
					Certifications
				</h2>
				<div className="flex justify-center">
					<Reveal
						yStart={75}
						yEnd={0}
						duration={1}
					>
						<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 p-4">
							{certificates.map((certificate) => (
								<Certificate
									key={certificate.name}
									name={certificate.name}
									image={certificate.image}
									finished={certificate.finished}
									credlyLink={certificate.credlyLink}
								/>
							))}
						</div>
					</Reveal>
				</div>

				<div className="mb-12">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"></div>
				</div>
				<div className="p-12 lg:p-0 justify-between flex flex-col space-y-14 lg:space-y-0 lg:flex-row text-white text-4xl font-cairobold">
					<div className="w-auto text-2xl">
						Technologies
						<Reveal
							xStart={-75}
							xEnd={0}
							duration={1}
						>
							<div className="grid grid-cols-3 gap-14 mt-12">
								{technologies.map((tech, index) => (
									<Logo
										key={index}
										image={tech.image}
										name={tech.name}
									/>
								))}
							</div>
						</Reveal>
					</div>
					<div>
						<span className="text-2xl">Frameworks</span>
						<Reveal
							yStart={75}
							yEnd={0}
							duration={1}
						>
							<div className="grid grid-cols-3 gap-14 mt-12">
								{frameworks.map((framework, index) => (
									<Logo
										key={index}
										image={framework.image}
										name={framework.name}
									/>
								))}
							</div>
						</Reveal>
					</div>
					<div>
						<span className="text-2xl">Tools</span>
						<Reveal
							xStart={75}
							xEnd={0}
							duration={1}
						>
							<div className="grid grid-cols-3 gap-14 mt-12">
								{tools.map((tool, index) => (
									<Logo
										key={index}
										image={tool.image}
										name={tool.name}
									/>
								))}
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</>
	);
};
