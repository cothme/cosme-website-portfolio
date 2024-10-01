import { motion, MotionConfig } from "framer-motion";
interface AnimatedHamburgerButtonProps {
	active: boolean;
	setActive: (active: boolean) => void;
}
export const AnimatedHamburgerButton = ({
	active,
	setActive,
}: AnimatedHamburgerButtonProps) => {
	return (
		<>
			<MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
				<motion.button
					initial={false}
					onClick={() => setActive(!active)}
					className="relative h-20 w-20 rounded-full transition-colors "
					animate={active ? "open" : "close"}
				>
					<motion.span
						style={{
							left: "50%",
							top: "35%",
							x: "-50%",
							y: "-50%",
						}}
						className="absolute h-1 w-10 bg-tertiary"
						variants={{
							open: {
								rotate: ["0deg", "0deg", "45deg"],
								top: ["35%", "50%", "50%"],
							},
							close: {
								rotate: ["45deg", "0deg", "0deg"],
								top: ["50%", "50%", "35%"],
							},
						}}
					/>
					<motion.span
						style={{
							left: "50%",
							top: "50%",
							x: "-50%",
							y: "-50%",
						}}
						className="absolute h-1 w-10 bg-tertiary"
						variants={{
							open: {
								rotate: ["0deg", "0deg", "-45deg"],
							},
							close: {
								rotate: ["-45deg", "0deg", "0deg"],
							},
						}}
					/>
					<motion.span
						style={{
							left: "calc(50% + 10px)",
							bottom: "35%",
							x: "-50%",
							y: "50%",
						}}
						className="absolute h-1 w-5 bg-tertiary"
						variants={{
							open: {
								rotate: ["0deg", "0deg", "-45deg"],
								left: "50%",
								bottom: ["35%", "50%", "50%"],
							},
							close: {
								left: "calc(50% + 10px)",
								rotate: ["45deg", "0deg", "0deg"],
							},
						}}
					/>
				</motion.button>
			</MotionConfig>
		</>
	);
};
