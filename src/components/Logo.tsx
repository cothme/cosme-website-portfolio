interface LogoProps {
	image: string;
	name?: string;
}
export const Logo = ({ image, name }: LogoProps) => {
	return (
		<>
			<div className="flex flex-col gap-y-4 justify-center items-center">
				<div className="h-16">
					<img
						src={image}
						alt=""
						className="w-16"
					/>
				</div>
				{/* Use a fixed margin to control the space between image and text */}
				<p className="text-base mt-4 font-cairolight">{name}</p>
			</div>
		</>
	);
};
