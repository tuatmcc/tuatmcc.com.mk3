import type { ComponentProps } from "astro/types";
import { motion } from "framer-motion";
import type { FC } from "react";

type Props = ComponentProps<typeof motion.div>;
export const SlideIn: FC<Props> = () => {
	return (
		<motion.div
			className="w-full flex"
			initial="hidden"
			whileInView="visible"
			viewport={{
				once: true,
				amount: 0.8,
			}}
		>
			<motion.div
				className="flex flex-col justify-center h-full p-[1px] bg-black w-[500px] max-w-full"
				variants={{
					visible: {
						backgroundPosition: "0% 0%",
						transition: {
							duration: 1.2,
						},
					},
				}}
				style={{
					clipPath: `polygon(
			0 0,
			0 calc(100% - 20px),
			20px 100%,
			100% 100%,
			100% 80px,
			calc(100% - 80px) 0,
			calc(100% - 150px) 0,
			calc(100% - 160px) 10px,
			calc(100% - 220px) 10px,
			calc(100% - 230px) 0
		)`,
					backgroundPosition: "100% 100%",
					backgroundSize: "200% 200%",
					backgroundImage:
						"linear-gradient(to bottom right, #000 50%, #fff 50%)",
				}}
			>
				<div
					className="flex flex-col justify-center h-full w-full p-4 py-8 pr-12 bg-gray-100"
					style={{
						clipPath: `polygon(
			0 0,
			0 calc(100% - 19px),
			19px 100%,
			100% 100%,
			100% 79px,
			calc(100% - 79px) 0,
			calc(100% - 149px) 0,
			calc(100% - 159px) 10px,
			calc(100% - 219px) 10px,
			calc(100% - 229px) 0
		)`,
					}}
				>
					<motion.h3
						className="text-2xl font-bold font-orbitron tracking-wider mb-2"
						variants={{
							hidden: {
								opacity: 0,
								x: 50,
							},
							visible: {
								opacity: 1,
								x: 0,
								transition: {
									delay: 0.2,
									duration: 1,
								},
							},
						}}
					>
						Hello, World!
					</motion.h3>
					<motion.h2
						className="text-4xl font-bold font-orbitron tracking-wider mb-4"
						variants={{
							hidden: {
								opacity: 0,
								x: 50,
							},
							visible: {
								opacity: 1,
								x: 0,
								transition: {
									delay: 0.5,
									duration: 1,
								},
							},
						}}
					>
						We are
						<span className="text-[#0066cc]"> MCC </span>!
					</motion.h2>
					<p className="text-lg mb-2">
						マイクロコンピュータクラブ (通称MCC)
						は、東京農工大学のプログラミングサークルです。
						講習会や合宿を開催したり、競プロやWeb開発、ゲーム制作等を行っています。
					</p>
				</div>
			</motion.div>
		</motion.div>
	);
};
