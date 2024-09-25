import { Title } from "../Title";
import ProjectGallery from "./ProjectGallery";

export const ProjectsBody = () => {
	return (
		<>
			<Title
				title="Featured Projects"
				position="text-end"
			/>
			<ProjectGallery />
		</>
	);
};
