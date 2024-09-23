import { timeline } from "../../types/timeline";
import { Title } from "../Title";
import { Timeline } from "./Timeline";

export const ITJourneyBody = () => {
	return (
		<>
			<Title title="My IT Journey" />
			<div className="relative flex flex-col items-center lg:mb-64">
				{/* Vertical Line */}
				<div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 top-6"></div>
				{timeline.map((index) => (
					<Timeline
						key={index.company_name}
						logo={index.logo}
						date={index.date}
						company_name={index.company_name}
						role={index.role}
						description={index.description}
						position={index.position}
					/>
				))}
			</div>
		</>
	);
};
