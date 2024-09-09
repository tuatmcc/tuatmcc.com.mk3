import { motion } from "framer-motion";

export const Pattern = () => (
	<motion.div
		initial={{ opacity: 0, height: 0 }}
		animate={{ opacity: 0.1, height: "100vh" }}
		transition={{ delay: 1, duration: 1 }}
		className="background-pattern fixed top-0 left-0 w-full h-dvh opacity-10 z-[-1]"
		style={{
			backgroundImage: `url("/assets/triangle.svg")`,
			backgroundPosition: "start",
			backgroundSize: "100px",
			backgroundRepeat: "repeat",
		}}
	/>
);
