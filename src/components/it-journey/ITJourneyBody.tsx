import { timeline } from "../../types/timeline";
import { Timeline } from "./Timeline";

export const ITJourneyBody = () => {
	return (
		<>
			<h1 className="text-white text-center lg:text-center font-cairobold text-4xl lg:text-7xl mb-14">
				My IT Journey
			</h1>
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
