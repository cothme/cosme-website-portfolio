import { timeline } from "../../types/timeline";
import { Reveal } from "../Reveal";
import { Title } from "../Title";
import { Timeline } from "./Timeline";

export const ITJourneyBody = () => {
	return (
		<>
			<Title title="My IT Journey" />
			<div className="relative flex flex-col items-center mb-48 lg:mb-64">
				{/* Vertical Line */}
				<div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 top-6"></div>
				{timeline.map((index) => (
					<Reveal
						key={index.company_name}
						xStart={index.position === "left" ? -7 : 7}
						xEnd={0}
						duration={1.2}
					>
						<Timeline
							logo={index.logo}
							date={index.date}
							company_name={index.company_name}
							role={index.role}
							description={index.description}
							position={index.position}
						/>
					</Reveal>
				))}
			</div>
		</>
	);
};
