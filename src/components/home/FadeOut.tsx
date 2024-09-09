import type { ComponentProps } from "astro/types";
import { motion, useScroll } from "framer-motion";
import { useCallback, useState } from "react";

type Props = ComponentProps<typeof motion.div>;

export const FadeOut = ({ children, className }: Props) => {
	const { scrollY } = useScroll();
	const [fadeOut, setFadeOut] = useState(window.scrollY > 200);

	scrollY.updateAndNotify = useCallback((y: number) => {
		if (y > 200) {
			setFadeOut(true);
		} else {
			setFadeOut(false);
		}
	}, []);

	return (
		<motion.div
			initial={{ opacity: fadeOut ? 0 : 1 }}
			animate={{
				opacity: fadeOut ? 0 : 1,
			}}
			transition={{ duration: 0.5 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
