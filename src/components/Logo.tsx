import { motion } from "framer-motion";

interface LogoProps {
	image: string;
	name?: string;
}
export const Logo = ({ image, name }: LogoProps) => {
	return (
		<>
			<motion.div
				whileHover={{ scale: 1.3 }}
				className="flex flex-col gap-y-4 justify-center items-center"
			>
				<div className="h-16">
					<img
						src={image}
						alt=""
						className="w-16"
					/>
				</div>
				{/* Use a fixed margin to control the space between image and text */}
				<p className="text-base mt-4 font-cairolight">{name}</p>
			</motion.div>
		</>
	);
};
