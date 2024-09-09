import { motion, useScroll, useSpring } from "framer-motion";
import {
	type ComponentPropsWithoutRef,
	useCallback,
	useEffect,
	useState,
} from "react";

const calcScrollPercentage = (scrollY: number, height: number) => {
	return Math.floor((scrollY / height) * 100);
};

export const Progress = (props: ComponentPropsWithoutRef<"svg">) => {
	const { scrollYProgress } = useScroll();
	const springY = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
	const [scrollInfo, setScrollInfo] = useState({
		scrollY: 0,
		scrollValue: 0,
	});
	const [height, setHeight] = useState(
		document.documentElement.scrollHeight - window.innerHeight,
	);

	const handleScroll = useCallback(() => {
		setScrollInfo({
			scrollY: window.scrollY,
			scrollValue: calcScrollPercentage(window.scrollY, height),
		});
	}, [height]);
	const handleResize = useCallback(() => {
		setHeight(document.documentElement.scrollHeight - window.innerHeight);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, [handleScroll, handleResize]);

	return (
		<div className="fixed bottom-0 right-0 p-2 w-32 h-32 z-10 grid items-center">
			<svg
				width="50"
				height="50"
				viewBox="0 0 100 100"
				className="w-full h-full col-start-1 row-start-1"
				style={{
					transform: "rotate(-90deg)",
				}}
			>
				<circle
					cx="50"
					cy="50"
					r="30"
					pathLength="1"
					className="opacity-30 fill-none"
					style={{
						strokeDashoffset: "0",
						strokeWidth: "15%",
					}}
				/>
				<title>Progress</title>
				<motion.circle
					cx="50"
					cy="50"
					r="30"
					pathLength="1"
					className="indicator fill-none stroke-black"
					style={{
						strokeDashoffset: "0",
						strokeWidth: "2px",
						pathLength: springY,
					}}
				/>
			</svg>
			<div className="col-start-1 row-start-1 flex items-center justify-center">
				{scrollInfo.scrollValue}%
			</div>
		</div>
	);
};
