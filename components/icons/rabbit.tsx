"use client";

import type { AnimationControls, Transition, Variants } from "framer-motion";
import { motion } from "framer-motion";

const transition: Transition = {
	duration: 0.35,
	repeat: Number.POSITIVE_INFINITY,
	repeatType: "reverse",
	ease: "easeInOut",
};

const speedVariants: Variants = {
	normal: {
		rotate: 0,
		x: 0,
		y: 0,
	},
	animate: {
		rotate: [0, 10, -10, 0],
		x: [0, 4, -4, 0],
		y: [0, 2, -2, 0],
		transition,
	},
};

const RabbitIcon = ({
	controls,
}: {
	controls?: AnimationControls;
}) => {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			variants={speedVariants}
			animate={controls}
		>
			<title>Fast</title>
			<path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
			<path d="M13 16a3 3 0 0 1 2.24 5" />
			<path d="M18 12h.01" />
			<path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
			<path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
		</motion.svg>
	);
};

export { RabbitIcon };
