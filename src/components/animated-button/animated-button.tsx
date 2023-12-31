"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./animated.css"; // Make sure to import your CSS styles

const AnimatedButton = () => {
	const [isAnimating, setIsAnimating] = useState(false);
	const router = useRouter();

	const animateButton = (event: any) => {
		event.preventDefault();

		setIsAnimating(true);
		setTimeout(() => {
			setIsAnimating(false);
			router.push("/file-upload");
		}, 1600);
	};

	return (
		<Link
			href="./file-upload"
			className=""
			passHref
		>
			<button
				className={`bubbly-button ${isAnimating ? "animate" : ""}`}
				onClick={animateButton}
			>
				Starten 2
			</button>
		</Link>
	);
};

export default AnimatedButton;
