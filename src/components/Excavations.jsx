import React from "react";

const Excavations = () => {
	return (
		<div className="bg-[#180107] min-h-screen">
			<div className="text-white pt-10 px-10 grid grid-cols-2 gap-8 ">
				<div className="">
					<h1 className="text-4xl">Excavations</h1>
					<h1 className="text-3xl pt-12">
						Welcome to the Excavation Journey of Bihar's Rich Heritage
					</h1>
					<p className="pt-8 text-lg">
						Bihar, a cradle of ancient civilization, holds within its soil the
						echoes of empires, universities, and spiritual awakenings that
						shaped the course of history. From the ruins of Nalanda and
						Vikramashila—once global centers of learning—to the majestic
						remnants of Pataliputra, the capital of the Mauryan Empire,
						archaeological excavations have unearthed treasures that tell
						stories of a glorious past. Spanning centuries, these efforts by the
						Archaeological Survey of India (ASI) and other institutions have
						revealed artifacts, structures, and inscriptions that offer
						invaluable insights into Bihar's cultural and historical legacy.
					</p>
				</div>
				<div>
					<img src="excavation_main.jpg" alt="" className="rounded-2xl" />
				</div>
			</div>

			<div className="text-white pt-16 px-10 flex gap-8">
				<div className="w-9/12">
					<img src="excavation_main.jpg" alt="" className="rounded-2xl" />
				</div>
				<div className="w-3/12"> 
					<p className="text-3xl pt-4">
						Site 1
					</p>
					<p className="pt-4 text-lg">
						Bihar, a cradle of ancient civilization, holds within its soil the
						echoes of empires, universities, and spiritual awakenings that
						shaped the course of history. From the ruins of Nalanda and
						Vikramashila—once global centers of learning—to the majestic
						remnants of Pataliputra, the capital of the Mauryan Empire,
						archaeological excavations have unearthed treasures that tell
						stories of a glorious past. Spanning centuries, these efforts by the
						Archaeological Survey of India (ASI) and other institutions have
						revealed artifacts, structures, and inscriptions that offer
						invaluable insights into Bihar's cultural and historical legacy.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Excavations;
