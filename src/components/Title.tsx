interface TitleProp {
	title: string;
	position?: string | "text-start";
}
export const Title = ({ title, position }: TitleProp) => {
	return (
		<h1
			className={`text-white text-center lg:${position} mx-14 font-cairobold text-4xl lg:text-7xl mb-14`}
		>
			{title}
		</h1>
	);
};
