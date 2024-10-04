import { motion } from "framer-motion";

interface NavbarMobileProps {
	show: boolean;
	setShow: (show: boolean) => void;
}
export const NavbarMobile = ({ show, setShow }: NavbarMobileProps) => {
	const toggleShow = () => {
		setShow(false);
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }} // Initial state
			animate={{ opacity: show ? 1 : 0, y: show ? 0 : -20 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.3 }}
			className={`${
				show ? "block" : "hidden"
			}  z-10 w-full h-min-screen bg-opacity-50 py-2`}
		>
			<ul className="text-4xl p-4 font-cairobold flex flex-col gap-y-4">
				<li>
					<a
						href="#top"
						className="inline-block p-2 rounded-lg transition"
						onClick={toggleShow}
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#it-journey"
						className="inline-block p-2 rounded-lg transition"
						onClick={toggleShow}
					>
						My IT Journey
					</a>
				</li>
				<li>
					<a
						href="#skills-and-training"
						className="inline-block p-2 rounded-lg transition"
						onClick={toggleShow}
					>
						Skills & Training
					</a>
				</li>
				<li>
					<a
						href="#projects"
						className="inline-block p-2 rounded-lg transition"
						onClick={toggleShow}
					>
						Projects
					</a>
				</li>
			</ul>
		</motion.div>
	);
};
