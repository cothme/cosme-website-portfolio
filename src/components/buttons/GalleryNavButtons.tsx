import { motion } from "framer-motion";
import { GrFormNext } from "react-icons/gr";

interface GalleryNavButtonProps {
	interact?: () => void;
	interactMiddle?: (index: number) => void;
	isActive?: boolean;
}

export const AnimatedNextButton = ({ interact }: GalleryNavButtonProps) => {
	return (
		<>
			<motion.button
				onClick={interact}
				className="p-4 text-primary bg-secondary border-2 border-secondary rounded-lg"
				whileTap={{ x: 10 }}
			>
				<GrFormNext color="#090B1A" />
			</motion.button>
		</>
	);
};
export const AnimatedPreviousButton = ({ interact }: GalleryNavButtonProps) => {
	return (
		<>
			<motion.button
				onClick={interact}
				className="p-4 text-white bg-secondary border-2 border-secondary rounded-lg "
				whileTap={{ x: -10 }}
			>
				<GrFormNext
					color="#090B1A"
					style={{ transform: "rotate(180deg)" }}
				/>
			</motion.button>
		</>
	);
};

export const MiddleButton = ({
	interactMiddle,
	isActive,
}: GalleryNavButtonProps) => {
	return (
		<div className="flex space-x-7 items-end">
			<motion.button
				onClick={() => interactMiddle && interactMiddle(0)}
				initial={{
					backgroundColor: isActive ? "#33E4EA" : "#1E40AF",
				}}
				animate={{
					backgroundColor: isActive ? "#33E4EA" : "#090B1A",
				}} // Animate color change
				transition={{ duration: 0.3 }} // Adjust duration for smoothness
				className={`lg:block rounded-full w-4 h-4 border ${
					isActive ? "border-primary" : "border-secondary"
				}`}
			/>
		</div>
	);
};
