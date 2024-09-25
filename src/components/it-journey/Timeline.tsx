import { TimelineProps } from "../../types/timeline";

export const Timeline: React.FC<TimelineProps> = ({
	logo,
	date,
	company_name,
	role,
	description,
	position,
}) => {
	return (
		<>
			{position === "left" ? (
				//if position is left render this
				<div
					id="it-journey"
					className="flex w-full mb-8"
				>
					<div className="flex flex-col items-end w-1/2 pr-6 text-right">
						<img
							src={logo}
							alt="HSI"
							className="w-24"
						/>
						<h3 className="text-xs lg:text-sm text-white font-cairolight ml-2">
							{date}
						</h3>
						<h3 className="text-xl lg:text-3xl text-white font-cairobold ml-2">
							{company_name}
						</h3>
						<h3 className="text-md lg:text-xl text-secondary font-cairobold ml-2">
							{role}
						</h3>
						<p className="text-sm lg:text-md text-gray-500 ml-2 lg:w-1/3">
							{description}
						</p>
					</div>
					<div className="relative z-10 w-6 h-6 bg-extra rounded-full border-4 border-white"></div>
					<div className="w-1/2"></div>
				</div>
			) : (
				//if position is right render this
				<div className="flex w-full mb-8">
					<div className="w-1/2"></div>
					<div className="relative z-10 w-6 h-6 bg-extra rounded-full border-4 border-white"></div>
					<div className="flex flex-col items-start w-1/2 pl-6 text-left">
						<img
							src={logo}
							alt="HSI"
							className="w-24"
						/>
						<h3 className="text-xs lg:text-sm text-white font-cairolight mr-2">
							{date}
						</h3>
						<h3 className="text-xl lg:text-3xl text-white font-cairobold mr-2">
							{company_name}
						</h3>
						<h3 className="text-md lg:text-xl text-secondary font-cairobold mr-2">
							{role}
						</h3>
						<p className="text-sm lg:text-md text-gray-500 mr-2 lg:w-1/3">
							{description}
						</p>
					</div>
				</div>
			)}
		</>
	);
};
