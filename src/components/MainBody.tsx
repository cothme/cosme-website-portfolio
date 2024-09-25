import { Hero } from "./Hero";
import { AboutMe } from "./AboutMe";
import { ITJourneyBody } from "../components/it-journey/ITJourneyBody";
import { SkillsTrainingBody } from "./skills-and-training/SkillsTrainingBody";
import { ProjectsBody } from "./projects/ProjectsBody";
const MainBody = () => {
	return (
		<>
			<Hero />
			<AboutMe />
			<ITJourneyBody />
			<SkillsTrainingBody />
			<ProjectsBody />
		</>
	);
};

export default MainBody;
