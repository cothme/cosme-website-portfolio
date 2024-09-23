import { Hero } from "./Hero";
import { AboutMe } from "./AboutMe";
import { ITJourneyBody } from "../components/it-journey/ITJourneyBody";
import { SkillsTrainingBody } from "./skills-and-training/SkillsTrainingBody";
const MainBody = () => {
	return (
		<>
			<Hero />
			<AboutMe />
			<ITJourneyBody />
			<SkillsTrainingBody />
		</>
	);
};

export default MainBody;
