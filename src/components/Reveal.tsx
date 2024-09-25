import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
	children: JSX.Element;
	xStart?: number;
	yStart?: number;
	xEnd?: number;
	yEnd?: number;
	duration?: number;
	delay?: number;
	scaleHidden?: number;
	scaleVisible?: number;
	rotateHidden?: number;
	rotateVisible?: number;
}

export const Reveal = ({
	children,
	xStart,
	yStart,
	xEnd,
	yEnd,
	duration,
	delay,
	scaleHidden,
	scaleVisible,
	rotateHidden,
	rotateVisible,
}: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<>
			<div ref={ref}>
				<motion.div
					variants={{
						hidden: {
							opacity: 0,
							x: xStart,
							y: yStart,
							scale: scaleHidden,
							rotate: rotateHidden,
						},
						visible: {
							opacity: 1,
							x: xEnd,
							y: yEnd,
							scale: scaleVisible,
							rotate: rotateVisible,
						},
					}}
					transition={{ duration: duration, delay: delay }}
					initial="hidden"
					animate={mainControls}
				>
					{children}
				</motion.div>
			</div>
		</>
	);
};
