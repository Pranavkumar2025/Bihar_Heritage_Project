import React from "react";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => ({
	hidden: {
		opacity: 0,
		y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
		x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
	},
	show: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 0.6,
			delay,
			ease: "easeOut",
		},
	},
});

const sites = [
	{
		id: 1,
		title: "Nalanda University",
		image: "excavation_main.jpg",
		description:
			"Ancient center of learning that attracted scholars from all over Asia. Excavations reveal monasteries, temples, and manuscripts.",
	},
	{
		id: 2,
		title: "Vikramashila",
		image: "excavation_main.jpg",
		description:
			"Another great seat of Buddhist learning. Archaeological finds include viharas, stupas, and terracotta artifacts.",
	},
	{
		id: 3,
		title: "Pataliputra",
		image: "excavation_main.jpg",
		description:
			"Capital of the Mauryan empire. Excavations have unearthed palatial ruins and ancient pillars.",
	},
];

const Excavations = () => {
	return (
		<div className="bg-white min-h-screen py-10 px-6 md:px-20">
			{/* Header Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				<motion.div
					variants={fadeIn("left", 0.1)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<h1 className="text-5xl font-bold text-gray-800">Excavations</h1>
					<h2 className="text-2xl font-medium text-gray-600 mt-6">
						Welcome to the Excavation Journey of Bihar's Rich Heritage
					</h2>
					<p className="text-gray-700 mt-6 text-lg leading-relaxed">
						Bihar, a cradle of ancient civilization, holds within its soil the echoes of
						empires, universities, and spiritual awakenings. From the ruins of Nalanda and
						Vikramashila—once global centers of learning—to the majestic remnants of
						Pataliputra, excavations by ASI and others have revealed incredible insights
						into our past.
					</p>
				</motion.div>

				<motion.div
					variants={fadeIn("right", 0.2)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="flex justify-center"
				>
					<img
						src="excavation_main.jpg"
						alt="Excavation Main"
						className="rounded-xl shadow-lg w-full max-w-md object-cover aspect-[4/3] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
					/>
				</motion.div>
			</div>

			{/* Excavation Sites Section */}
			<div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{sites.map((site, index) => (
					<motion.div
						key={site.id}
						variants={fadeIn("up", index * 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
					>
						<div className="overflow-hidden rounded-lg">
							<img
								src={site.image}
								alt={site.title}
								className="w-full object-cover aspect-[4/3] rounded-lg transform transition-transform duration-300 hover:scale-105"
							/>
						</div>
						<h3 className="text-2xl font-semibold text-gray-800 mt-4">{site.title}</h3>
						<p className="text-gray-600 mt-2 text-md">{site.description}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Excavations;
