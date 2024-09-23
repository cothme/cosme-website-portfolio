import { Title } from "../Title";
import { Logo } from "../Logo";
import { technologies, tools, frameworks } from "../../types/techstack";
import { certificates } from "./certificates";
import { Certificate } from "./Certificate";

export const SkillsTrainingBody = () => {
	return (
		<>
			<Title
				title="Skills and Training"
				position="text-start"
			/>
			<div className="container mx-auto pb-8">
				{/* Section Title */}
				<h2 className="text-4xl text-center text-white font-cairobold mb-8 lg:text-start">
					Certifications
				</h2>
				<div className="flex justify-center">
					<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 p-4">
						{certificates.map((certificate) => (
							<Certificate
								name={certificate.name}
								image={certificate.image}
								finished={certificate.finished}
								credlyLink={certificate.credlyLink}
							/>
						))}
					</div>
				</div>

				<div className="mb-12">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"></div>
				</div>
				<div className="p-12 lg:p-0 justify-between flex flex-col space-y-14 lg:space-y-0 lg:flex-row text-white text-4xl font-cairobold">
					<div className="w-auto">
						Technologies
						<div className="grid grid-cols-3 gap-14 mt-12">
							{technologies.map((tech, index) => (
								<Logo
									key={index}
									image={tech.image}
									name={tech.name}
								/>
							))}
						</div>
					</div>
					<div>
						Frameworks
						<div className="grid grid-cols-3 gap-14 mt-12">
							{frameworks.map((framework, index) => (
								<Logo
									key={index}
									image={framework.image}
									name={framework.name}
								/>
							))}
						</div>
					</div>
					<div>
						Tools
						<div className="grid grid-cols-3 gap-14 mt-12">
							{tools.map((tool, index) => (
								<Logo
									key={index}
									image={tool.image}
									name={tool.name}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
