import { type ReactNode, useState } from "react";

export const NavigationContainer = ({ children }: { children: ReactNode }) => {
	const [active, setActive] = useState(false);
	return (
		<>
			<div
				className="fixed top-0 left-0 w-full h-full bg-blue-100 bg-opacity-50 z-[-10] transition-opacity"
				style={{ opacity: active ? 1 : 0 }}
				onClick={() => setActive(false)}
				onKeyDown={(e) => e.key === "Escape" && setActive(false)}
			/>
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
							className="horizon1"
						/>
						<path
							d="M4 12L20 12"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							className="horizon2"
						/>
						<path
							d="M4 18L20 18"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							className="horizon3"
						/>
					</svg>
				</button>
				<nav
					className={`fixed pl-16 grid top-0 bottom-0 right-0 w-[500px] max-w-[95vw] transition-transform ${active ? "translate-x-0" : "translate-x-full"}`}
				>
					<svg
						className="text-gray-500 absolute top-0 left-0 z-[-1]"
						height="100%"
						viewBox="0 0 160 80"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Deco</title>
						<polygon
							points="0 0 0 10 5 15 5 65 0 70 0 80 160 80 160 0"
							fill="currentColor"
						/>
					</svg>
					<div className="relative flex flex-col bg-gray-500 p-2">
						<div className="bottom-0 right-0 absolute h-full">
							<img
								src="/logo/logo-vertical.svg"
								alt="Logo"
								className="opacity-40 py-4 pt-16 h-full"
							/>
						</div>
						<div className="relative w-full flex justify-end items-center">
							<button
								type="button"
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
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										className="horizon1"
									/>
									<path
										d="M4 12L20 12"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										className="horizon2"
									/>
									<path
										d="M4 18L20 18"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										className="horizon3"
									/>
								</svg>
							</button>
						</div>
						{children}
					</div>
				</nav>
			</header>
		</>
	);
};
