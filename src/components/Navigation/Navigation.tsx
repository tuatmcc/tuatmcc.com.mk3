import { useState } from "react";

export default function Navigation() {
	const [active, setActive] = useState(false);
	const links = [
		{ href: "/", label: "Home" },
		{ href: "/blog", label: "Blog" },
		{ href: "/about", label: "About" },
	];

	return (
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
				className={`fixed pl-16 grid top-0 bottom-0 right-0 w-[500px] max-w-[80vw] transition-transform ${active ? "translate-x-0" : "translate-x-full"}`}
			>
				<svg
					className="text-gray-400 absolute top-0 left-0 z-[-1]"
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
				<div className="flex flex-col items-end bg-gray-400 p-4 pt-16">
					<button
						type="button"
						className="fixed z-10 top-0 right-0 p-2"
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
								d="M4 18L20 12"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								className="diagonal1"
							/>
							<path
								d="M4 6L20 12"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								className="diagonal2"
							/>
						</svg>
					</button>
					<h2>
						<a href="/" className="text-white font-bold text-4xl font-orbitron">
							MCC
						</a>
					</h2>
					<ul className="flex flex-col gap-8 items-end mt-16">
						{links.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="text-white text-3xl font-orbitron"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
}
