import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useState } from "react";

export const NavigationContainer = ({ children }: { children: ReactNode }) => {
	const [active, setActive] = useState(false);
	return (
		<>
			<AnimatePresence>
				{active && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed top-0 left-0 w-full h-dvh bg-black bg-opacity-30 backdrop-blur-sm"
						onClick={() => setActive(false)}
						onKeyDown={(e) => e.key === "Escape" && setActive(false)}
					/>
				)}
			</AnimatePresence>
			<header>
				<button
					type="button"
					className="fixed top-0 right-0 p-2"
					aria-label="Menu Button"
					onClick={() => setActive((prev) => !prev)}
				>
					<svg
						className=""
						width="40"
						height="40"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path
							d="M4 6L20 6"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M4 12L20 12"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M4 18L20 18"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</button>
				<motion.div
					initial={{ x: "100%" }}
					animate={{ x: active ? 0 : "100%" }}
					transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
					className="fixed grid top-0 bottom-0 right-0 w-[500px] max-w-[95vw]"
					style={{
						clipPath:
							"polygon(0 0, 0 30%, 60px calc(30% + 60px), 60px calc(100% - 160px), 0 calc(100% - 100px), 0 100%, 100% 100%, 100% 0)",
					}}
				>
					<div className="relative pl-16 flex flex-col bg-gray-900 p-2 overflow-y-hidden">
						<img
							src="/assets/technology-vertical.svg"
							alt="Logo"
							className="absolute opacity-10 py-4 h-full pointer-events-none"
						/>

						<button
							type="button"
							className="fixed z-10 top-0 right-0 p-2"
							aria-label="Menu Button"
							onClick={() => setActive((prev) => !prev)}
						>
							<img src="/icons/hamburger.svg" alt="Close" />
						</button>

						{children}
					</div>
					<div
						className="fixed top-0 h-[30%] w-[60px] bg-red-600"
						style={{
							clipPath:
								"polygon(20px 0, 22px 0, 22px 20%, 60px calc(20% + 38px), 60px calc(20% + 50px), 20px calc(20% + 12px))",
						}}
					/>
					<div
						className="fixed top-0 h-[30%] w-[60px] bg-red-600"
						style={{
							clipPath:
								"polygon(20px calc(20% + 22px), 60px calc(20% + 62px), 60px calc(20% + 74px), 20px calc(20% + 36px))",
						}}
					/>
					<div
						className="fixed top-0 h-[30%] w-[60px] bg-red-600"
						style={{
							clipPath:
								"polygon(20px calc(20% + 46px), 60px calc(20% + 86px), 60px calc(20% + 98px), 20px calc(20% + 60px))",
						}}
					/>
					<div
						className="fixed top-0 h-[30%] w-[60px] bg-red-600"
						style={{
							clipPath:
								"polygon(58px calc(20% + 86px), 60px calc(20% + 86px), 60px calc(20% + 160px), 58px calc(20% + 160px))",
						}}
					/>
				</motion.div>
			</header>
		</>
	);
};
