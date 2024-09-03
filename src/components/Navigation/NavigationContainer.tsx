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
				<AnimatePresence>
					{active && (
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
							className="fixed grid top-0 bottom-0 right-0 w-[500px] max-w-[90vw]"
							style={{
								clipPath:
									"polygon(0 0, 0 100px, 60px 160px, 60px calc(100% - 160px), 0 calc(100% - 100px), 0 100%, 100% 100%, 100% 0)",
							}}
						>
							<div className="relative pl-16 flex flex-col bg-gray-500 p-2 overflow-y-hidden">
								<div className="bottom-0 right-0 absolute h-full">
									<img
										src="/logos/logo-vertical.svg"
										alt="Logo"
										className="opacity-40 py-4 pt-16 h-full pointer-events-none"
									/>
								</div>

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
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</>
	);
};
