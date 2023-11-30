import { motion } from 'framer-motion';
import React from 'react';

const LoadingDot = {
	display: 'block',
	width: '0.9rem',
	height: '0.9rem',
	backgroundColor: 'rgb(39 39 42)',
	borderRadius: '50%',
};

const LoadingContainer = {
	width: '6rem',
	height: '2rem',
	display: 'flex',
	justifyContent: 'space-around',
};

const ContainerVariants = {
	initial: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const DotVariants = {
	initial: {
		y: '0%',
	},
	animate: {
		y: '100%',
	},
};

const DotTransition: {
	duration: number;
	repeat: number;
	repeatType: 'reverse' | 'loop' | 'mirror' | undefined;
	ease: string;
} = {
	duration: 0.55,
	repeat: Infinity,
	repeatType: 'reverse',
	ease: 'easeInOut',
};

export default function ThreeDotsWave() {
	return (
		<div
			style={{
				paddingTop: '4rem',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<motion.div
				style={LoadingContainer}
				variants={ContainerVariants}
				initial="initial"
				animate="animate"
			>
				<motion.span
					style={LoadingDot}
					variants={DotVariants}
					transition={DotTransition}
				/>
				<motion.span
					style={LoadingDot}
					variants={DotVariants}
					transition={DotTransition}
				/>
				<motion.span
					style={LoadingDot}
					variants={DotVariants}
					transition={DotTransition}
				/>
			</motion.div>
		</div>
	);
}
