import { Hero } from "./Hero";
import { AboutMe } from "./AboutMe";
import { ITJourneyBody } from "../components/it-journey/ITJourneyBody";
const MainBody = () => {
	return (
		<>
			<Hero />
			<AboutMe />
			<ITJourneyBody />
		</>
	);
};

export default MainBody;
